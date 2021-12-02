import Link from 'next/link';
import { Product } from '@interfaces/Product';
import { useAppFromStore } from 'src/redux/slices/app.slice';

type ProductButtonProps = {
  id: number;
  product: Product;
};

export default function ProductButton({ id, product }: ProductButtonProps) {
  const { dispatchActiveModal, dispatchViewedProduct } = useAppFromStore();
  return (
    <Link href={{ pathname: '', query: { productItem: id } }} passHref>
      <button
        onClick={() => {
          dispatchViewedProduct(product);
          dispatchActiveModal(true);
        }}
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        View Gift Card
      </button>
    </Link>
  );
}
