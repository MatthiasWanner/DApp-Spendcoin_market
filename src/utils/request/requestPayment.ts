import {
  approveErc20ForProxyConversionIfNeeded,
  isSolvent,
  payRequest
} from '@requestnetwork/payment-processor';
import { RequestLogicTypes, ExtensionTypes } from '@requestnetwork/types';
import { BigNumber, providers } from 'ethers';

import { IInvoiceGetOneResponseWithRequest } from '@interfaces/request';
import {
  calculateMaxToSpend,
  getPaymentCurrencyContract,
  getPaymentNetwork
} from '.';
import { currencies } from '@utils/api';
import { cryptoCompare } from '@utils/api/crypto_compare';

export const anyToErc20Payment = async (
  walletAddress: string,
  requestData: IInvoiceGetOneResponseWithRequest,
  provider: providers.Web3Provider
) => {
  const {
    request: { request }
  } = requestData;
  const paymentCurrency = getPaymentCurrencyContract(request);
  const paymentCurrencySymbol = requestData.paymentCurrency;

  if (!paymentCurrency) {
    throw new Error('No payment currency found');
  }

  const { network, feeAmount = 0 } = request.extensions[
    getPaymentNetwork(request) as string
  ]?.values as ExtensionTypes.PnAnyToErc20.ICreationParameters;

  const currencyInfos: RequestLogicTypes.ICurrency = {
    type: 'ERC20' as RequestLogicTypes.CURRENCY,
    value: paymentCurrency,
    network
  };
  try {
    if (
      !(await isSolvent(
        walletAddress,
        { ...currencyInfos, value: currencyInfos.value.toLowerCase() },
        BigNumber.from(request.expectedAmount),
        { provider }
      ))
    ) {
      throw new Error('You do not have enough funds to pay this request');
    }

    const {
      decimals,
      exchangeInfo: {
        cryptocompare: { code: referenceCurrencySymbol }
      }
    } = await currencies.getOne(paymentCurrencySymbol);

    const rate = (
      await cryptoCompare.getRate(request.currency, referenceCurrencySymbol)
    )[referenceCurrencySymbol];

    const maxToSpend = calculateMaxToSpend(
      +request.expectedAmount,
      +feeAmount,
      rate,
      decimals,
      3
    );

    await approveErc20ForProxyConversionIfNeeded(
      request,
      walletAddress,
      currencyInfos.value,
      provider,
      maxToSpend
    );

    const tx = await payRequest(request, provider, undefined, undefined, {
      currency: currencyInfos,
      maxToSpend
    });
    await tx.wait(1);
  } catch (error) {
    throw error;
  }
};

export const requestPayment = async (
  walletAddress: string | null,
  requestData: IInvoiceGetOneResponseWithRequest,
  ethereum: providers.ExternalProvider
): Promise<void> => {
  try {
    if (!walletAddress || !requestData.request) {
      throw new Error('No account or request data provided');
    }

    const provider = new providers.Web3Provider(ethereum);

    const {
      request: { request }
    } = requestData;

    const paymentNetwork = getPaymentNetwork(request);

    if (
      paymentNetwork === ExtensionTypes.ID.PAYMENT_NETWORK_ANY_TO_ERC20_PROXY
    ) {
      return anyToErc20Payment(walletAddress, requestData, provider);
    }

    throw new Error('Payment network not supported');
  } catch (error) {
    throw error;
  }
};
