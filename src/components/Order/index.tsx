import React, { useState } from 'react';

import PaymentButtons from './PaymentButtons';
import Cart from '@components/Cart';
import OrderForm from '@components/Order/OrderForm/OrderForm';
import { useAppFromStore } from 'src/redux/slices/app.slice';

function OrderRegister(): JSX.Element {
  const { invoiceId } = useAppFromStore().app;
  return (
    <>
      <main className="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse">
        <h1 className="sr-only">Checkout</h1>

        <Cart />
        {invoiceId ? <PaymentButtons /> : <OrderForm />}
      </main>
    </>
  );
}

export default OrderRegister;
