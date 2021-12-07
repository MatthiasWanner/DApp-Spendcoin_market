import React from 'react';

type ShopCatalogContainer = {
  children: JSX.Element;
};

function ShopCatalogContainer({ children }: ShopCatalogContainer): JSX.Element {
  return <div>{children}</div>;
}

export default ShopCatalogContainer;
