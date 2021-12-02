import React from 'react';

interface IProps {
  taxes: string;
}

export default function MobileTaxes({ taxes }: IProps): JSX.Element {
  return (
    <div className="flex justify-between">
      <dt>Taxes</dt>
      <dd className="text-gray-900">{taxes}</dd>
    </div>
  );
}
