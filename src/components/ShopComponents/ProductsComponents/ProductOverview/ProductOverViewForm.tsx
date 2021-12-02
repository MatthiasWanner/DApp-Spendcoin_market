import { Button } from '@components/FormComponents';
import { Product } from '@interfaces/Product';
import React, { useEffect, useState } from 'react';
import { useAppFromStore } from 'src/redux/slices/app.slice';
import { useCartFromStore } from 'src/redux/slices/cart.slice';

type ProductOverViewFormProps = {
  product: Product;
};

function ProductOverViewForm({
  product
}: ProductOverViewFormProps): JSX.Element {
  const [price, setPrice] = useState<string>('');
  const { dispatchActiveModal, dispatchResetViewedProduct } = useAppFromStore();
  const { dispatchAddProduct } = useCartFromStore();

  useEffect(() => {
    return () => {
      dispatchResetViewedProduct();
    };
  }, []);

  const handleBuyProduct = ({ name, VAT: amount }: Product, price: string) => {
    dispatchAddProduct({
      currency: 'EUR',
      name,
      quantity: 1,
      unitPrice: (+price.replace(',', '.') * 100).toString(),
      tax: {
        type: 'percentage',
        amount
      }
    });
    dispatchActiveModal(false);
  };

  return (
    <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
      <section aria-labelledby="options-heading">
        <form>
          <div className="mt-10">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Montant carte cadeau
            </label>
            <select
              id="location"
              name="location"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              defaultValue="Canada"
              onChange={(e) => setPrice(e.target.value)}
            >
              {product.options.map((option, index) => (
                <option key={`${option.label}-${index}`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-10">
            <Button
              className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              handleClick={() => handleBuyProduct(product, price)}
            >
              Acheter
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ProductOverViewForm;
