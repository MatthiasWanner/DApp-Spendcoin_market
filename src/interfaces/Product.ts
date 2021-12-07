export interface Product {
  name: string;
  href: string;
  basePrice: string;
  price?: String;
  currencySymbol: string;
  VAT: string;
  description: string;
  images: ProductImage[];
  breadcrumbs: IProductBreadcrumbs[];
  options: ProductOption[];
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductOption {
  label: string;
  value: string;
}

export interface IProductBreadcrumbs {
  id: number;
  name: string;
  href: string;
}
