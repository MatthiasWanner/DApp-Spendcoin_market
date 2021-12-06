import {
  IInvoiceCreateResponse,
  IInvoiceBody
} from './invoice-create.interfaces';

export interface IInvoiceUpdateResponse extends IInvoiceCreateResponse {}

export type IInvoiceUpdateBody = Partial<IInvoiceBody>;

export interface IInvoiceUpdateArgs {
  invoiceId: string;
  body: IInvoiceUpdateBody;
}
