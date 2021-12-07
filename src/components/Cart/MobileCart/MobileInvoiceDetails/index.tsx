import React from 'react';
import MobileDiscount from './MobileDiscountDetails';
import MobileShippingDetails from './MobileShippingDetails';
import MobileSubtotal from './MobileSubtotalDetails';
import MobilTaxes from './MobileTaxesDetails';

interface IProps {
  shipping?: string;
  taxes?: string;
  subtotal?: string;
  discount?: { code: string; amount: string };
}

function MobileInvoiceDetails({
  discount = { amount: '', code: '' },
  shipping = '',
  subtotal = '',
  taxes = ''
}: IProps): JSX.Element {
  return (
    <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
      <MobileSubtotal subtotal={subtotal} />
      <MobileDiscount discount={discount} />
      <MobilTaxes taxes={taxes} />
      <MobileShippingDetails shipping={shipping} />
    </dl>
  );
}

export default MobileInvoiceDetails;
