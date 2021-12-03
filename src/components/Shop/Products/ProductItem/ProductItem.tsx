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
    <div className="relative group">
      <ProductButton id={id} product={product} />
      <ProductItemHeader {...product.images[0]} />
      <ProductItemBody id={id} {...product} />
    </div>
  );
}
