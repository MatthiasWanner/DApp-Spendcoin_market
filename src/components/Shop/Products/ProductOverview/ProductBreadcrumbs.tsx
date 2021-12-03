import { ProductBreadcrumbs } from '@interfaces/Product';
import React from 'react';

type ProductBreadcrumbsProps = {
  breadcrumbs: ProductBreadcrumbs[];
};

function ProductBreadcrumbs({
  breadcrumbs
}: ProductBreadcrumbsProps): JSX.Element {
  return (
    <nav aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        {breadcrumbs.map(
          (
            breadcrumb: { id: number; name: string; href: string },
            breadcrumbIdx: number
          ) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center text-sm">
                <a
                  href={breadcrumb.href}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {breadcrumb.name}
                </a>
                {breadcrumbIdx !== breadcrumbs.length - 1 ? (
                  <svg
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    aria-hidden="true"
                    className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                ) : null}
              </div>
            </li>
          )
        )}
      </ol>
    </nav>
  );
}

export default ProductBreadcrumbs;
