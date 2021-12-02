import React from 'react';

interface IProps {
  subtotal: string;
}

function Subtotal({ subtotal }: IProps): JSX.Element {
  return (
    <div className="flex justify-between">
      <dt>Subtotal</dt>
      <dd className="text-gray-900">{subtotal}</dd>
    </div>
  );
}

export default Subtotal;
