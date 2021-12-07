import React from 'react';
import { Product } from '@interfaces/Product';
import ProductItem from './ProductItem/ProductItem';
import { Button } from '@components/FormComponents';

type ProductListProps = {
  products: Product[];
};

export default function ProductList({
  products
}: ProductListProps): JSX.Element {
  return (
    <div className="bg-isabelline">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Toutes nos cartes cadeaux
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductItem
              key={`${product.name}-index`}
              id={index}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
