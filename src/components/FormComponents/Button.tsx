import React from 'react';

interface IProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  handleClick?: () => void;
}

export function Button({
  children,
  className = '',
  type = 'button',
  disabled = false,
  handleClick
}: IProps): JSX.Element {
  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      onClick={handleClick ? () => handleClick() : undefined}
    >
      {children}
    </button>
  );
}
