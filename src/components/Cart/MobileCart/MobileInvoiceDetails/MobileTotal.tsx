import React from 'react';

interface IProps {
  total: string;
}

function MobileTotal({ total }: IProps): JSX.Element {
  return (
    <p className="flex items-center justify-between text-sm font-medium text-gray-900 border-t border-gray-200 pt-6 mt-6">
      <span className="text-base">Total</span>
      <span className="text-base">{total}</span>
    </p>
  );
}

export default MobileTotal;
