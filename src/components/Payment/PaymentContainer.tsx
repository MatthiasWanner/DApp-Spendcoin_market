import React from 'react';

interface IProps {
  children: React.ReactNode;
}

function PaymentContainer({ children }: IProps): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col max-w-3xl mx-auto bg-isabelline text-black h-72 shadow-white-light">
        {children}
      </div>
    </div>
  );
}

export default PaymentContainer;
