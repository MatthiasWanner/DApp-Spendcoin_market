import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Order', href: '/order' }, // 👈 only dev link
  { name: 'Payment', href: '/payment' } // 👈 only dev link
];

export default function Header() {
  return (
    <>
      <Head>
        <div>
          <title>SpendCoin Market</title>
          <meta name="description" content="Buy gift cards with cryptos" />
          <link rel="icon" href="/img/favicon.ico" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </div>
      </Head>
      <header>
        <nav aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b lg:border-none">
            <div className="flex items-center px-5">
              <Link href="/">
                <a>
                  <Image
                    src="/img/logo_spc.svg"
                    alt="spendcoin logo"
                    width={25}
                    height={50}
                  />
                </a>
              </Link>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <Link key={link.name} href={link.href}>
                    <a className="text-base font-medium text-white hover:text-indigo-50">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
