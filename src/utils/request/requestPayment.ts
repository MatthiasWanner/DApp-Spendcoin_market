import {
  approveErc20ForProxyConversionIfNeeded,
  isSolvent,
  payRequest
} from '@requestnetwork/payment-processor';
import { RequestLogicTypes, ExtensionTypes } from '@requestnetwork/types';
import { BigNumber, providers, utils as ethersUtils } from 'ethers';

import { IInvoiceGetOneResponseWithRequest } from '@interfaces/request';
import { getPaymentCurrencyContract, getPaymentNetwork } from '.';

export const requestPayment = async (
  metamaskAccount: string | null,
  requestData: IInvoiceGetOneResponseWithRequest,
  ethereum: providers.ExternalProvider
): Promise<void> => {
  try {
    if (!metamaskAccount || !requestData) {
      throw new Error('No account or request data provided');
    }

    const provider = new providers.Web3Provider(ethereum);

    const {
      request: { request }
    } = requestData;

    const paymentCurrency = getPaymentCurrencyContract(request);

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

    if (
      !(await isSolvent(
        metamaskAccount,
        { ...currencyInfos, value: currencyInfos.value.toLowerCase() },
        BigNumber.from(request.expectedAmount),
        { provider }
      ))
    ) {
      throw new Error('You do not have enough funds to pay this request');
    }

    const calculateMaxToSpend = (
      requestAmount: number,
      feeAmount: number,
      conversionRate: number,
      slippage: number
    ): BigNumber => {
      const paymentAmount = (requestAmount + feeAmount) * conversionRate;
      // const maxAmount = paymentAmount + (slippage * paymentAmount) / 100;

      const maxUsdcAmount =
        (paymentAmount + (slippage * paymentAmount) / 100) / 100;

      return ethersUtils.parseUnits(maxUsdcAmount.toString(), 6);
    };

    const maxToSpend = calculateMaxToSpend(
      +request.expectedAmount,
      +feeAmount,
      1.14, // TODO: get conversion rate from the contract
      3
    );

    console.log('maxToSpend', maxToSpend);

    approveErc20ForProxyConversionIfNeeded(
      request,
      metamaskAccount,
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
    console.log(error);
  }
};
