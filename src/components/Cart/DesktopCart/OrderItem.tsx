import React from 'react';
import Image from 'next/image';
import { Product } from '@interfaces/Product';

interface IProps {
  product: Product;
}

function OrderDetails({ product }: IProps): JSX.Element {
  return (
    <>
      <Image
        src={product.images[0].src}
        alt={product.images[0].alt}
        className="flex-none object-center object-cover bg-isabelline rounded-md"
        width={150}
        height={115}
      />
      <div className="flex flex-col justify-between space-y-4">
        <div className="text-sm font-medium space-y-1">
          <h3 className="text-gray-900">{product.name}</h3>
          <p className="text-gray-900">{product.basePrice}€</p>
          <p className="text-gray-900">Quantité: 1</p>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
