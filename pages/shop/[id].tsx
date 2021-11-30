import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

export default function CardDetail() {
  const { id } = useRouter().query;
  return (
    <>
      <div>Card detail: {id}</div>
      <div>
        <Link href="/order">
          <a>Acheter</a>
        </Link>
      </div>
    </>
  );
}
