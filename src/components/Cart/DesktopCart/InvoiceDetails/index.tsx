import React from 'react';
import Total from './Total';

interface IProps {
  total?: string;
  shipping?: string;
  taxes?: string;
  subtotal?: string;
  discount?: { code: string; amount: string };
}

function InvoiceDetails({ total = '' }: IProps): JSX.Element {
  return (
    <div className="sticky bottom-0 flex-none bg-isabelline p-6">
      <Total total={total} />
    </div>
  );
}

export default InvoiceDetails;
