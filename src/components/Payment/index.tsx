import { Button } from '@components/FormComponents';
import Metamask from '@components/Metamask';
import { useMetaMask } from 'metamask-react';

export default function Payment() {
  const { account, ethereum } = useMetaMask();

  // TODO: type ethereum provider
  const handleClick = (connectedAccount: string, ethereumProvider: any) => {
    console.log(connectedAccount, ethereumProvider);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col max-w-3xl mx-auto bg-isabelline h-72 shadow-white-light">
        <div className=" flex h-full justify-center items-center">
          <Metamask />
        </div>
        {account && (
          <div className="flex h-full justify-center items-center">
            <Button
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-sapphire hover:bg-indigo-dye focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
              handleClick={() => handleClick(account, ethereum)}
            >
              Payer avec Metamask
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
