import React from 'react';

interface IProps {
  taxes: string;
}

function TaxesDetails({ taxes }: IProps): JSX.Element {
  return (
    <div className="flex justify-between">
      <dt>Taxes</dt>
      <dd className="text-gray-900">{taxes}</dd>
    </div>
  );
}

export default TaxesDetails;
