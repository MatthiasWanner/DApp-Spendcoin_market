export interface Product {
  name: string;
  href: string;
  basePrice: string;
  currencySymbol: string;
  VAT: string;
  description: string;
  images: ProductImage[];
  breadcrumbs: ProductBreadcrumbs[];
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

export interface ProductBreadcrumbs {
  id: number;
  name: string;
  href: string;
}
