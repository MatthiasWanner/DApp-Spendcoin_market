import React from 'react';

import PaymentButtons from './PaymentButtons';
import Cart from '@components/Cart';

function Payment(): JSX.Element {
  return (
    <>
      <main className="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse">
        <h1 className="sr-only">Checkout</h1>
        <Cart />
        <PaymentButtons />
      </main>
    </>
  );
}

export default Payment;
