import React, { Dispatch, SetStateAction } from 'react';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  handleClick?: () => void;
}

function Button({
  children,
  className = '',
  type,
  disabled = false,
  handleClick,
}: IProps): JSX.Element {
  return (
    <button
      disabled={disabled}
      type={type || 'button'}
      className={className}
      onClick={handleClick ? () => handleClick() : undefined}
    >
      {children}
    </button>
  );
}

export default Button;
