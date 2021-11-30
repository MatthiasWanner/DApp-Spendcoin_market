import Link from 'next/link';

export default function Shop() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/shop/1">
            <a>card 1</a>
          </Link>
        </li>
        <li>
          <Link href="/shop/2">
            <a>card 2</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
