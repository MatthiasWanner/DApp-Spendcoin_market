import React from 'react';

import OrderItem from './OrderItem';

import { fetchGiftCardsData } from '@utils/api';

const products = [fetchGiftCardsData()[0]]; // 👈 will come from Redux store

function OrderDetails() {
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
