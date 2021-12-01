import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

function Header(): JSX.Element {
  return (
    <>
      <Head>
        <div>
          <title>SpendCoin Market</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </div>
      </Head>
      <header>
        <Link href="/">
          <a>
            <Image
              src="/img/logo_SP.png"
              alt="spendcoin logo"
              width={50}
              height={100}
            />
          </a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/shop">
          <a>Shop</a>
        </Link>
      </header>
    </>
  );
}

export default Header;
