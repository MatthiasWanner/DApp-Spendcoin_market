import { useMetaMask } from 'metamask-react';
import Metamask from '@components/Metamask';

import { useAppFromStore } from 'src/redux/slices/app.slice';
import PaymentButtons from '@components/Order/PaymentButtons';
import { Button } from '@components/FormComponents';
import { useQuery } from 'react-query';
import { invoices } from '@utils/api';
import { requestPayment } from '@utils/request';
import { toast } from 'react-toastify';
import AwaitingRequest from './AwaitingRequest';
import PaymentContainer from './PaymentContainer';

export default function Payment() {
  const { account, ethereum } = useMetaMask();
  const { requestId, isAwaitingRequest, isPaying } = useAppFromStore().app;
  const { dispatchIsAwaitingRequest, dispatchIsPaying } = useAppFromStore();

  const { data } = useQuery(
    `invoice:${requestId}`,
    () => invoices.getOne(requestId as string),
    {
      enabled: !!requestId,
      onSuccess: (data) =>
        data.request.request
          ? dispatchIsAwaitingRequest(false)
          : dispatchIsAwaitingRequest(true),
      refetchInterval: (data) => (data?.request.request ? false : 5000)
    }
  );

  if (!requestId) return <PaymentButtons />;

  if (isAwaitingRequest)
    return (
      <AwaitingRequest message="Votre facture est en cours de contôle, cela peut prendre plusieurs minutes" />
    );

  if (isPaying) return <AwaitingRequest message="Paiement en cours" />;

  return (
    <PaymentContainer>
      <div className=" flex h-full justify-center items-center">
        <Metamask />
      </div>
      {account && (
        <div className="flex h-full justify-center items-center">
          {data && (
            <Button
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-sapphire hover:bg-indigo-dye focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
              handleClick={async () => {
                try {
                  dispatchIsPaying(true);
                  await requestPayment(account, data, ethereum);
                  toast.success('Payment effectué !');
                  dispatchIsPaying(false);
                } catch (e) {
                  const { message } = e as Error;
                  toast.error(message);
                }
              }}
            >
              Payer avec Metamask
            </Button>
          )}
        </div>
      )}
    </PaymentContainer>
  );
}
