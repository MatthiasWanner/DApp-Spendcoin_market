import React from 'react';
import Link from 'next/link';

export default function index() {
  return (
    <div>
      <Link href="/payment">
        <a>Enregistrer une commande</a>
      </Link>
    </div>
  );
}
