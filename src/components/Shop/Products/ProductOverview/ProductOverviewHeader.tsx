import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import { Product } from '@interfaces/Product';

type ProductOverviewHeaderProps = {
  product: Product;
};

function ProductOverviewHeader({
  product
}: ProductOverviewHeaderProps): JSX.Element {
  return (
    <>
      <div className="mt-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {product.name}
        </h1>
      </div>

      <section aria-labelledby="information-heading" className="mt-4">
        <h2 id="information-heading" className="sr-only">
          Product information
        </h2>

        <div className="flex items-center">
          <p className="text-lg text-gray-900 sm:text-xl">
            A partir de {product.basePrice}
            {product.currencySymbol}
          </p>
        </div>

        <div className="mt-4 space-y-6">
          <p className="text-base text-gray-500">{product.description}</p>
        </div>

        <div className="mt-6 flex items-center">
          <CheckIcon
            className="flex-shrink-0 w-5 h-5 text-green-500"
            aria-hidden="true"
          />
          <p className="ml-2 text-sm text-gray-500">
            En stock. Prêt pour expédition
          </p>
        </div>
      </section>
    </>
  );
}

export default ProductOverviewHeader;
