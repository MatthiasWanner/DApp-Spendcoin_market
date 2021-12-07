import { CartItem } from '@interfaces/CartItem';
import React from 'react';
import { useCartFromStore } from '@redux/slices/cart.slice';

import OrderItem from './OrderItem';

function OrderDetails() {
  const { cart } = useCartFromStore();
  const products = cart.products as CartItem[];

  return (
    <ul
      role="list"
      className="flex-auto overflow-y-auto divide-y divide-gray-200 px-6"
    >
      {products.map((product) => (
        <li key={product.name} className="flex py-6 space-x-6">
          <OrderItem product={product} />
        </li>
      ))}
    </ul>
  );
}

export default OrderDetails;
