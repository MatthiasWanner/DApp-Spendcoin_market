import React, { useState } from 'react';

import PaymentButtons from './PaymentButtons';
import Cart from '@components/Cart';
import OrderForm from '@components/Order/OrderForm/OrderForm';

function OrderRegister(): JSX.Element {
  const [isPaying] = useState(false);
  return (
    <>
      <main className="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse">
        <h1 className="sr-only">Checkout</h1>

        <Cart />
        {isPaying ? <PaymentButtons /> : <OrderForm />}
      </main>
    </>
  );
}

export default OrderRegister;
