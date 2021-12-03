import React from 'react';
import Image from 'next/image';
import MetamaskLogo from '@public/img/metamask.svg';

interface IProps {
  children: React.ReactNode;
}

function MetamaskContainer({ children }: IProps): JSX.Element {
  return (
    <div className="w-72 rounded-md h-14 flex text-white shadow-lg">
      <div className="w-3/12 p-2 relative bg-white border border-yellow-600">
        <Image
          src={MetamaskLogo}
          layout="fill"
          alt="Metamask Logo"
          objectFit="contain"
        />
      </div>
      <div className="w-9/12 flex justify-center items-center bg-yellow-600 ">
        {children}
      </div>
    </div>
  );
}

export default MetamaskContainer;
