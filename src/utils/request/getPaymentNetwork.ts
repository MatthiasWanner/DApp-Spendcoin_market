import { IRequestData } from '@requestnetwork/types/dist/client-types';
import { ExtensionTypes } from '@requestnetwork/types';

export const getPaymentNetwork = (
  request: IRequestData
): ExtensionTypes.ID | undefined => {
  return Object.values(request.extensions).find(
    (x) => x.type === 'payment-network'
  )?.id;
};
