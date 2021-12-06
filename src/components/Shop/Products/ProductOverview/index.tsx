import ProductImages from './ProductImages';
import { Product } from '@interfaces/Product';
import ProductOverViewForm from './ProductOverViewForm';
import ProductBreadcrumbs from './ProductBreadcrumbs';
import ProductOverviewHeader from './ProductOverviewHeader';

interface IProps {
  product: Product;
}

export default function ProductOverview({ product }: IProps): JSX.Element {
  return (
    <div className="bg-isabelline">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="lg:max-w-lg lg:self-end">
          <ProductBreadcrumbs breadcrumbs={product.breadcrumbs} />
          <ProductOverviewHeader product={product} />
        </div>
        <ProductImages images={product.images} />
        <ProductOverViewForm product={product} />
      </div>
    </div>
  );
}
