import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, TextInput, SelectInput } from '@components/FormComponents';
import OrderFormHeader from './OrderFormHeader';
import {
  IBuyerKeys,
  AddressKeys,
  IAddress,
  IInvoiceBody
} from '@interfaces/request/invoice-create.interfaces'; // TODO: fix index export next error
import { useMutation } from 'react-query';
import { invoices } from '@utils/api';
import { invoiceBody } from '@utils/constants';
import { invoiceNumberGenerator } from '@utils/api/request/invoiceNumberGenerator';
import { toast } from 'react-toastify';

interface IFormData extends IAddress {
  lastName: string;
  firstName: string;
  email: string;
}

function OrderForm(): JSX.Element {
  const { register, handleSubmit } = useForm();

  const { mutateAsync: mutateInvoice } = useMutation(invoices.create);

  const { mutateAsync: mutateInvoiceOnChain } = useMutation(
    invoices.postOnChain
  );

  const onSubmit = async ({
    email,
    firstName,
    lastName,
    ...address
  }: IFormData) => {
    const data: IInvoiceBody = {
      ...invoiceBody,

      // Temporary datas
      invoiceItems: [
        {
          name: 'test',
          quantity: 1,
          currency: 'EUR',
          unitPrice: '0010',
          tax: { type: 'percentage', amount: '20' }
        }
      ],
      buyerInfo: { address, email, firstName, lastName },
      creationDate: new Date().toISOString(),
      invoiceNumber: invoiceNumberGenerator(`${lastName[0]} ${firstName[0]}`)
    };
    try {
      const { id } = await mutateInvoice(data);
      /* await mutateInvoiceOnChain(id); */ // 👈 uncomment to post invoice on chain
      toast.success('Votre commande est bien enregistrée 🚀');
    } catch (error) {
      toast.error('Une erreur est survenue ⁉️. Veuillez recommencer');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-isabelline py-6 px-4 space-y-6 sm:p-6">
            <OrderFormHeader />

            <div className="grid grid-cols-6 gap-6">
              <TextInput
                label="Prénom"
                value={IBuyerKeys.FIRSTNAME}
                className="col-span-6 sm:col-span-3"
                inputClassName="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-isabelline"
                labelClassName="block text-sm font-medium text-gray-700"
                register={register}
              />

              <TextInput
                label="Nom"
                value={IBuyerKeys.LASTNAME}
                className="col-span-6 sm:col-span-3"
                inputClassName="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-isabelline"
                labelClassName="block text-sm font-medium text-gray-700"
                register={register}
              />

              <TextInput
                label="Adresse mail"
                value={IBuyerKeys.EMAIL}
                className="col-span-6 sm:col-span-4"
                inputClassName="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-isabelline"
                labelClassName="block text-sm font-medium text-gray-700"
                register={register}
              />

              <SelectInput
                label="Pays"
                value={AddressKeys.COUNTRYNAME}
                options={[{ label: 'France', value: 'France' }]}
                className="col-span-6 sm:col-span-3"
                labelClassName="block text-sm font-medium text-gray-700"
                selectClassName="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-isabelline"
                register={register}
              />

              <TextInput
                label="Adresse postale"
                value={AddressKeys.STREETADDRESS}
                className="col-span-6"
                inputClassName="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-isabelline"
                labelClassName="block text-sm font-medium text-gray-700"
                register={register}
              />

              <TextInput
                label="Ville"
                value={AddressKeys.LOCALITY}
                className="col-span-6 sm:col-span-6 lg:col-span-2"
                inputClassName="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-isabelline"
                labelClassName="block text-sm font-medium text-gray-700"
                register={register}
              />

              <TextInput
                label="Code postal"
                value={AddressKeys.POSTALCODE}
                className="col-span-6 sm:col-span-3 lg:col-span-2"
                inputClassName="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-isabelline"
                labelClassName="block text-sm font-medium text-gray-700"
                register={register}
              />
            </div>
          </div>
          <div className="px-4 py-3 bg-isabelline text-right sm:px-6">
            <Button
              type="submit"
              className="bg-blue-sapphire border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-dye focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {'Enregister ma commande'}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default OrderForm;
