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
      <div className="flex justify-center rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="object-center"
          width="400"
          height="300"
        />
      </div>
    </div>
  );
}
