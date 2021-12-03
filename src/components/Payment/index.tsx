import { useMetaMask } from 'metamask-react';
import Metamask from '@components/Metamask';

import { useAppFromStore } from 'src/redux/slices/app.slice';
import PaymentButtons from '@components/Order/PaymentButtons';
import { Button } from '@components/FormComponents';
import { useQuery } from 'react-query';
import { invoices } from '@utils/api';
import { requestPayment } from '@utils/request';

export default function Payment() {
  const { account, ethereum } = useMetaMask();
  const { requestId } = useAppFromStore().app;

  const { data } = useQuery(
    `invoice:${requestId}`,
    () => invoices.getOne(requestId as string),
    { enabled: !!requestId }
  );

  // TODO: type ethereum provider
  const handleClick = (connectedAccount: string, ethereumProvider: any) => {
    console.log(connectedAccount, ethereumProvider);
  };

  if (!requestId) return <PaymentButtons />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col max-w-3xl mx-auto bg-isabelline h-72 shadow-white-light">
        <div className=" flex h-full justify-center items-center">
          <Metamask />
        </div>
        {account && (
          <div className="flex h-full justify-center items-center">
            {data && (
              <Button
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-sapphire hover:bg-indigo-dye focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                handleClick={() => requestPayment(account, data, ethereum)}
              >
                Payer avec Metamask
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
