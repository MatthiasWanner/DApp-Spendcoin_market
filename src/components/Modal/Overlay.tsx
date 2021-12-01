import React, { Dispatch, SetStateAction, useState } from 'react';
import { XCircleIcon } from '@heroicons/react/solid';

import { Button } from '@components/FormComponents';

interface IProps {
  handleClick: Dispatch<SetStateAction<boolean>>;
  reactElement: JSX.Element;
}

function Overlay({ handleClick, reactElement }: IProps): JSX.Element {
  return (
    <div className="viewer-container flex items-center justify-center w-screen h-screen absolute top-0 left-0 z-50 bg-gray-500 bg-opacity-90">
      <div className="viewer-elements flex relative md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl">
        <Button
          type="button"
          handleClick={() => handleClick(false)}
          className="w-8 absolute top-0 right-0 transform translate-x-2/4 -translate-y-2/4"
        >
          <XCircleIcon className="text-black" />
        </Button>
        {reactElement}
      </div>
    </div>
  );
}

export default Overlay;
