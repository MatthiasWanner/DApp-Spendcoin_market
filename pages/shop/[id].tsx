import { Overlay } from '@components/Modal';
import { ProductOverview } from '@components/Shop';
import { useRouter } from 'next/dist/client/router';
import { gifCards } from '@datas/giftCards';

export default function CardDetail() {
  const { id } = useRouter().query;
  const router = useRouter();

  return (
    <>
      <div>Card detail: {id}</div>
      <div>
        <Overlay
          handleClick={() => router.push('/shop')}
          reactElement={<ProductOverview product={gifCards[+id! - 1]} />}
        />
      </div>
    </>
  );
}
