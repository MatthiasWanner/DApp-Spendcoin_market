import React from 'react';
import { useCartFromStore } from 'src/redux/slices/cart.slice';

import InvoiceDetails from './InvoiceDetails';
import OrderDetails from './OrderDetails';

const total = '20€'; // 👈 Will come from redux store

function DesktopCart(): JSX.Element {
  const { cart } = useCartFromStore();
  return (
    <>
      {/* Order summary */}
      <section
        aria-labelledby="summary-heading"
        className="hidden bg-isabelline w-full max-w-md flex-col lg:flex"
      >
        <h2 id="summary-heading" className="sr-only">
          Order summary
        </h2>

        <OrderDetails />
        <InvoiceDetails total={cart.total.toString()} />
      </section>
    </>
  );
}

export default DesktopCart;
