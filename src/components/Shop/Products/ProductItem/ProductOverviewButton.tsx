import Link from 'next/link';
import { Product } from '@interfaces/Product';
import { useAppFromStore } from '@redux/slices/app.slice';

type ProductButtonProps = {
  id: number;
  product: Product;
};

export default function ProductButton({ id, product }: ProductButtonProps) {
  const { dispatchActiveModal, dispatchViewedProduct } = useAppFromStore();
  return (
    <>
      <Link href={{ pathname: '', query: { productItem: id } }} passHref>
        <button
          onClick={() => {
            dispatchViewedProduct(product);
            dispatchActiveModal(true);
          }}
          type="button"
          className="flex items-center opacity-0 p-4 hover:opacity-100 absolute z-20 top-0 left-0 w-full h-full"
        >
          <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
            View Gift Card
          </div>
        </button>
      </Link>
    </>
  );
}
