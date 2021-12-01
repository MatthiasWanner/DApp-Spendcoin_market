import ProductList from '@components/ShopComponents/ProductsComponents/ProductList';
import { useEffect, useState } from 'react';
import { Product } from '@interfaces/Product';
import { fetchGiftCardsData } from '@utils/api';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const results = fetchGiftCardsData();
    setProducts(results);
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
