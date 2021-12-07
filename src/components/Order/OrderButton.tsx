import { Button } from '@components/FormComponents';
import React from 'react';
import { useRouter } from 'next/router';

type OrderButtonProps = {
  children: string;
  pathname: string;
};

function OrderButton({ pathname, children }: OrderButtonProps): JSX.Element {
  const router = useRouter();
  const onClickedButton = () => {
    router.push('/order');
  };
  return (
    <div className="flex flex-row justify-end bg-isabelline h-20 pr-7">
      <div className="flex flex-col justify-center">
        <Button
          type="button"
          handleClick={onClickedButton}
          className="w-60 h-10 mt-6 bg-blue-sapphire border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-dye focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {children}
        </Button>
      </div>
    </div>
  );
}

export default OrderButton;
