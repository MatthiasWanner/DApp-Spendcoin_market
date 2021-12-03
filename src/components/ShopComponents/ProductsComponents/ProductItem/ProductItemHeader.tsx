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
    </div>
  );
}

export default ProductItemHeader;
