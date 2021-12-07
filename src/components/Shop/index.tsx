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
import { ShoppingCartIcon, XCircleIcon } from '@heroicons/react/solid';

function ShopCatalog(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [expandedCart, setExpandedCart] = useState<boolean>(false);
  const { app, dispatchActiveModal } = useAppFromStore();

  useEffect(() => {
    const results = fetchGiftCardsData();
    setProducts(results);
  }, []);

  const handleCartDisplay = (expanded: boolean) => {
    setExpandedCart(!expanded);
  };

  return (
    <>
      <div className="bg-isabelline flex flex-row justify-end p-5">
        {!expandedCart ? (
          <ShoppingCartIcon
            width="30"
            height="30"
            onClick={() => handleCartDisplay(expandedCart)}
          />
        ) : (
          <XCircleIcon
            width="30"
            height="30"
            onClick={() => handleCartDisplay(expandedCart)}
          />
        )}
      </div>
      <div className="bg-isabelline relative lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row">
        <h1 className="sr-only">Catalog</h1>
        <div className="absolute top-0 right-0"></div>
        <ShopCatalogContainer>
          <div>
            <ProductList products={products} />
          </div>
        </ShopCatalogContainer>
        {expandedCart && (
          <div className="flex flex-col justify-end absolute top-0 right-0 w-1/3 h-full">
            <Cart />
            <OrderButton pathname="/order">{'Passer ma commande'}</OrderButton>
          </div>
        )}
      </div>
      {app.activeModal && (
        <Overlay
          reactElement={<ProductOverview product={app.viewedProduct} />}
          handleClick={() => dispatchActiveModal(false)}
        ></Overlay>
      )}
    </>
  );
}

export default ShopCatalog;
