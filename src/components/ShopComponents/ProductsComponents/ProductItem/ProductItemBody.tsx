import React from 'react';
import Link from 'next/link';

type ProductItemBodyProps = {
  id: number;
  name: string;
  description: string;
  price: string;
  currencySymbol: string;
};

function ProductItemBody({
  id,
  name,
  description,
  price,
  currencySymbol
}: ProductItemBodyProps) {
  return (
    <>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
        <h3>
          <Link href={{ pathname: '', query: { paramId: id } }}>
            <a href="">
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </Link>
        </h3>
        <p>
          A partir de {price}
          {currencySymbol}
        </p>
      </div>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </>
  );
}

export default ProductItemBody;
