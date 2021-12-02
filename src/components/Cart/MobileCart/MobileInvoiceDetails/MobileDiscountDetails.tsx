import React from 'react';

interface IProps {
  discount: {
    code: string;
    amount: string;
  };
}

function MobileDiscount({ discount }: IProps): JSX.Element {
  return (
    <div className="flex justify-between">
      <dt className="flex">
        Discount
        <span className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
          {discount.code}
        </span>
      </dt>
      <dd className="text-gray-900">-{discount.amount}</dd>
    </div>
  );
}

export default MobileDiscount;
