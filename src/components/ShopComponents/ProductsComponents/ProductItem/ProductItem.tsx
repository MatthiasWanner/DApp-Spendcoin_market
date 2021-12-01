import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '';
import ProductItemHeader from './ProductItemHeader';
import ProductItemBody from './ProductItemBody';

type ProductProps = {
  id: number;
  product: Product;
};

export default function ProductItem({
  id,
  product
}: ProductProps): JSX.Element {
  return (
    <div className="relative group">
      <ProductItemHeader {...product.images[0]} />
      <ProductItemBody id={id} {...product} />
    </div>
  );
}
