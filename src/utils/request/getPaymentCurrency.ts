import { IRequestData } from '@requestnetwork/types/dist/client-types';
import { getPaymentNetwork } from '.';

export const getPaymentCurrencyContract = (
  request: IRequestData
): string | null => {
  const paymentNetwork = getPaymentNetwork(request);

  if (paymentNetwork) {
    return request.extensions[paymentNetwork].values.acceptedTokens[0];
  }

  return null;
};
