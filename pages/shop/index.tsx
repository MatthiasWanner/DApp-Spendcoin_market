import ProductList from '@components/Shop/Products/ProductList';
import { useEffect, useState } from 'react';
import { Product } from '@interfaces/Product';
import { fetchGiftCardsData } from '@utils/api';
import { useAppFromStore } from '@redux/slices/app.slice';
import { Overlay } from '@components/ModalComponents';
import ProductOverview from '@components/Shop/Products/ProductOverview';

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const { app, dispatchActiveModal } = useAppFromStore();

  useEffect(() => {
    const results = fetchGiftCardsData();
    setProducts(results);
  }, []);

  return (
    <div>
      <ProductList products={products} />
      {app.activeModal && (
        <Overlay
          reactElement={<ProductOverview product={app.viewedProduct} />}
          handleClick={() => dispatchActiveModal(false)}
        ></Overlay>
      )}
    </div>
  );
}
