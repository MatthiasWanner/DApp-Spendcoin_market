export enum AddressKeys {
  CONTRYNAME = 'contry-name',
  STREETADDRESS = 'street-address',
  POSTALCODE = 'postal-code',
  LOCALITY = 'locality'
  // EXTENDEDADDRESS = 'extended-address',
  // REGION = 'region',
}

export enum IBuyerKeys {
  EMAIL = 'email',
  FIRSTNAME = 'firstName',
  LASTNAME = 'lastName'
}

export type IAddress = {
  [key in AddressKeys]: string;
};

export interface IBuyerInfos {
  address: IAddress;
  email: string;
  firstName: string;
  lastName: string;
}

export interface ISellerInfos extends IBuyerInfos {
  businessName: string;
  taxRegistration: string;
}

export interface IInvoiceBody {
  meta: {
    format: string;
    version: string;
  };
  creationDate: string;
  invoiceItems: {
    currency: string;
    name: string;
    quantity: number;
    tax: {
      type: string;
      amount: string;
    };
    unitPrice: string;
  }[];
  invoiceNumber: string;
  buyerInfo: IBuyerInfos;
  sellerInfo: ISellerInfos;
  paymentTerms: {
    dueDate: string;
  };
  paymentAddress: string;
  paymentCurrency: string;
  tags: string[];
}

export interface IUsdPaymentMetadata {
  paymentFrom: string;
  paymentDate: string;
  gasFeeUsd: string;
  paidAmount: string;
  paidAmountCrypto: string;
  paidAmountUsd: string;
  gasFee: string;
  gasFeeCurrency: string;
  requestFee: string;
  requestFeeCurrency: string;
  requestFeeUsd: string;
  txHash: string;
  chainName: string;
  paymentCurrency: string;
}

export interface IInvoiceCreateResponse extends IInvoiceBody {
  id: string;
  type: string;
  requestId: string;
  status: string;
  paymentMetadata: IUsdPaymentMetadata | null;
  role: string;
}
