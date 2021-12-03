import React from 'react';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { fetchGiftCardsData } from '@utils/api';
import MobileTotal from './MobileInvoiceDetails/MobileTotal';
import MobileOrderItem from './MobileOrderItem';
import { useCartFromStore } from 'src/redux/slices/cart.slice';
import { CartItem } from '@interfaces/CartItem';

const total = '20€'; // 👈 will come from Redux store

function MobileCart() {
  const { cart } = useCartFromStore();
  const products = cart.products as CartItem[];
  return (
    <>
      <section
        aria-labelledby="order-heading"
        className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden"
      >
        <Disclosure as="div" className="max-w-lg mx-auto">
          {({ open }) => (
            <>
              <div className="flex items-center justify-between">
                <h2
                  id="order-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Your Order
                </h2>
                <Disclosure.Button className="font-medium text-indigo-600 hover:text-indigo-500">
                  {open ? (
                    <span>Hide full summary</span>
                  ) : (
                    <span>Show full summary</span>
                  )}
                </Disclosure.Button>
              </div>

              <Disclosure.Panel>
                <ul role="list" className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <li key={product.name} className="flex py-6 space-x-6">
                      <MobileOrderItem product={product} />
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
              <MobileTotal total={cart.total.toString()} />
            </>
          )}
        </Disclosure>
      </section>
    </>
  );
}

export default MobileCart;
