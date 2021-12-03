import React, { useState } from 'react';
import Image from 'next/image';
import { ProductImage } from '@interfaces/Product';

interface IProps {
  images: ProductImage[];
}

export default function ProductImages({ images }: IProps): JSX.Element {
  const [currentIndex] = useState(0);

  return (
    <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
      <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
}
