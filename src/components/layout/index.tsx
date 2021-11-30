import React, { ReactNode } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps): JSX.Element {
  return (
    <div>
      <Header />
      <Body> {children} </Body>
      <Footer />
    </div>
  );
}
