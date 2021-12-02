import ProductItemHeader from './ProductItemHeader';
import ProductItemBody from './ProductItemBody';
import { Product } from '@interfaces/Product';
import ProductButton from './ProductOverviewButton';

type ProductProps = {
  id: number;
  product: Product;
};

export default function ProductItem({
  id,
  product
}: ProductProps): JSX.Element {
  return (
    <>
      <ProductButton id={id} product={product} />
      <div className="relative group">
        <ProductItemHeader {...product.images[0]} />
        <ProductItemBody id={id} {...product} />
      </div>
    </>
  );
}
