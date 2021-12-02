import React, { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
