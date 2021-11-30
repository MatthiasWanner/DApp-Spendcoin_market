import { Button, TextInput, SelectInput } from '@components/FormComponents';
import OrderFormHeader from './OrderFormHeader';

function OrderForm(): JSX.Element {
  return (
    <>
      <form>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
            <OrderFormHeader />

            <div className="grid grid-cols-6 gap-6">
              <TextInput
                label="Prénom"
                value="firstName"
                className="col-span-6 sm:col-span-3"
                inputClassName="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                labelClassName="block text-sm font-medium text-gray-700"
              />

              <TextInput
                label="Nom"
                value="lastName"
                className="col-span-6 sm:col-span-3"
                inputClassName="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                labelClassName="block text-sm font-medium text-gray-700"
              />

              <TextInput
                label="Adresse mail"
                value="email"
                className="col-span-6 sm:col-span-4"
                inputClassName="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                labelClassName="block text-sm font-medium text-gray-700"
              />

              <SelectInput
                label="Pays"
                value="country"
                options={[{ label: 'France', value: 'fr' }]}
                className="col-span-6 sm:col-span-3"
                labelClassName="block text-sm font-medium text-gray-700"
                selectClassName="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />

              <TextInput
                label="Adresse postale"
                value="streetAddress"
                className="col-span-6"
                inputClassName="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                labelClassName="block text-sm font-medium text-gray-700"
              />

              <TextInput
                label="Ville"
                value="city"
                className="col-span-6 sm:col-span-6 lg:col-span-2"
                inputClassName="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                labelClassName="block text-sm font-medium text-gray-700"
              />

              <TextInput
                label="Code postal"
                value="postal-code"
                className="col-span-6 sm:col-span-3 lg:col-span-2"
                inputClassName="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                labelClassName="block text-sm font-medium text-gray-700"
              />
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <Button className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {'Enregister ma commande'}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default OrderForm;
