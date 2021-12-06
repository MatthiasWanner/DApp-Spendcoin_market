import React from 'react';
import Image from 'next/image';
import { CartItem } from '@interfaces/CartItem';
import { TrashIcon } from '@heroicons/react/solid';
import { useCartFromStore } from '@redux/slices/cart.slice';

interface IProps {
  product: CartItem;
}

function MobileOrderItem({ product }: IProps): JSX.Element {
  const { dispatchRemoveItem } = useCartFromStore();
  return (
    <>
      <Image
        src={product.images[0].src}
        alt={product.images[0].alt}
        className="flex-none w-40 h-40 object-center object-cover bg-gray-200 rounded-md"
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
      <div>
        <TrashIcon
          className="w-5"
          onClick={() => dispatchRemoveItem(product)}
        />
      </div>
    </>
  );
}

export default MobileOrderItem;
