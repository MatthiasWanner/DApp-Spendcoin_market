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
    <div className="">
      <Header />
      <Body> {children} </Body>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
