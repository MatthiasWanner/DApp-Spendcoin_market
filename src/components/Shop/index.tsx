import { Product } from '@interfaces/Product';
import React, { useEffect, useState } from 'react';
import { useAppFromStore } from 'src/redux/slices/app.slice';
import { fetchGiftCardsData } from '@utils/api';
import ProductList from './Products/ProductList';
import { Overlay } from '@components/ModalComponents';
import ProductOverview from './Products/ProductOverview';
import Cart from '@components/Cart';
import OrderButton from '@components/Order/OrderButton';
import ShopCatalogContainer from './ShopCatalogContainer';

function ShopCatalog(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const { app, dispatchActiveModal } = useAppFromStore();

  useEffect(() => {
    const results = fetchGiftCardsData();
    setProducts(results);
  }, []);

  return (
    <div className="bg-isabelline lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row">
      <h1 className="sr-only">Catalog</h1>
      <ShopCatalogContainer>
        <>
          <ProductList products={products} />
          {app.activeModal && (
            <Overlay
              reactElement={<ProductOverview product={app.viewedProduct} />}
              handleClick={() => dispatchActiveModal(false)}
            ></Overlay>
          )}
          <OrderButton pathname="/order">{'Passer ma commande'}</OrderButton>
        </>
      </ShopCatalogContainer>
      <Cart />
    </div>
  );
}

export default ShopCatalog;
