import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

function Body({ children }: IProps): JSX.Element {
  return <div>{children}</div>;
}

export default Body;
