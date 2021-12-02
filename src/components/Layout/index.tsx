import React, { ReactNode } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps): JSX.Element {
  return (
    <div className="w-screen bg-space-cadet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="h-screen">
          <Header />
          <Body> {children} </Body>
        </div>
        <Footer />
      </div>
    </div>
  );
}
