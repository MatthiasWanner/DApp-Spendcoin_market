import React from 'react';

type ProductItemBodyProps = {
  id: number;
  name: string;
  description: string;
  basePrice: string;
  currencySymbol: string;
};

function ProductItemBody({
  id,
  name,
  description,
  basePrice,
  currencySymbol
}: ProductItemBodyProps) {
  return (
    <>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
        <h3>
          <span aria-hidden="true" className="absolute inset-0" />
          {name}
        </h3>
        <p>
          A partir de {basePrice}
          {currencySymbol}
        </p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </>
  );
}

export default ProductItemBody;
