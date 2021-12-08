import { useMutation } from 'react-query';
import { useRouter } from 'next/dist/client/router';
import { toast } from 'react-toastify';
import { LockClosedIcon } from '@heroicons/react/solid';

import { invoices } from '@utils/api';
import { useAppFromStore } from 'src/redux/slices/app.slice';
import { useCartFromStore } from 'src/redux/slices/cart.slice';
import { Button } from '@components/FormComponents';
import GoToShopButton from '@components/Shop/GoToShopButton';

function PaymentButtons(): JSX.Element {
  const router = useRouter();

  const { app, dispatchRequestId, dispatchIsAwaitingRequest } =
    useAppFromStore();
  const { total } = useCartFromStore().cart;

  const { mutateAsync } = useMutation(invoices.postOnChain, {
    onSuccess: ({ requestId }) => {
      dispatchRequestId(requestId);
      dispatchIsAwaitingRequest(true);
      router.push('/payment');
    }
  });

  const postInvoiceOnChain = async (invoiceId: string) => {
    try {
      await mutateAsync(invoiceId);
    } catch (error) {
      toast.error('Une erreur est survenue');
    }
  };

  return (
    <section
      aria-labelledby="payment-heading"
      className="flex-auto overflow-y-auto p-4 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24 bg-isabelline"
    >
      <div className="max-w-lg mx-auto">
        {total ? (
          <Button
            className="w-full mt-6 bg-blue-sapphire border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-dye focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
            handleClick={() => postInvoiceOnChain(app.invoiceId as string)}
          >
            Enregister ma commande de {total} €
          </Button>
        ) : (
          <GoToShopButton className="w-full justify-center">{`Montant de votre panier ${total}€ : revenir au shop`}</GoToShopButton>
        )}

        <p className="flex justify-center text-sm font-medium text-gray-500 mt-6">
          <LockClosedIcon
            className="w-5 h-5 text-gray-400 mr-1.5"
            aria-hidden="true"
          />
          {'Transactions sécurisées Metamask et '}
          <a
            href="https://request.network/en/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {'Request'}
          </a>
        </p>
      </div>
    </section>
  );
}

export default PaymentButtons;
