import React from 'react';

interface IProps {
  shipping: string;
}

function ShippingDetails({ shipping }: IProps): JSX.Element {
  return (
    <div className="flex justify-between">
      <dt>Shipping</dt>
      <dd className="text-gray-900">{shipping}</dd>
    </div>
  );
}

export default ShippingDetails;
