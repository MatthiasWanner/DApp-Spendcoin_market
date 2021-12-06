import { LockClosedIcon } from '@heroicons/react/solid';
import React from 'react';
import { useMutation } from 'react-query';

import { invoices } from '@utils/api';
import { Button } from '@components/FormComponents';
import { toast } from 'react-toastify';
import { useCartFromStore } from 'src/redux/slices/cart.slice';
import { useAppFromStore } from 'src/redux/slices/app.slice';
import { useRouter } from 'next/dist/client/router';

const total = '20€'; // 👈 Will come from redux

function PaymentButtons(): JSX.Element {
  const { invoiceId } = useAppFromStore().app;
  const router = useRouter();

  const { mutateAsync } = useMutation(invoices.postOnChain, {
    onSuccess: () => {
      router.push('/payment');
    }
  });

  const postInvoiceOnChain = async (invoiceId: string) => {
    try {
      // await mutateAsync(invoiceId);
      router.push('/payment'); // 👈 temporary to dev tests before send request to blockchain
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
        <Button
          className="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          handleClick={() => postInvoiceOnChain(invoiceId as string)}
        >
          Payer {total}
        </Button>

        <p className="flex justify-center text-sm font-medium text-gray-500 mt-6">
          <LockClosedIcon
            className="w-5 h-5 text-gray-400 mr-1.5"
            aria-hidden="true"
          />
          Payment details stored in plain text
        </p>
      </div>
    </section>
  );
}

export default PaymentButtons;
