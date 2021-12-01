import React from 'react';
import Image from 'next/image';

type ProductItemHeaderProps = {
  src: string;
  alt: string;
};

function ProductItemHeader({ src, alt }: ProductItemHeaderProps) {
  return (
    <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
      <Image
        src={src}
        alt={alt}
        className="object-center object-cover"
        layout="fill"
      />
      <div
        className="flex items-end opacity-0 p-4 group-hover:opacity-100"
        aria-hidden="true"
      >
        <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
          View Gift Card
        </div>
      </div>
    </div>
  );
}

export default ProductItemHeader;
