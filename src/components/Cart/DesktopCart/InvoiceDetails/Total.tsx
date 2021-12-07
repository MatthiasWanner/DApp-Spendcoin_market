import React from 'react';

interface IProps {
  total: string;
}

function Total({ total }: IProps): JSX.Element {
  return (
    <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
      <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
        <dt className="text-base">Total</dt>
        <dd className="text-base">{total}</dd>
      </div>
    </dl>
  );
}

export default Total;
