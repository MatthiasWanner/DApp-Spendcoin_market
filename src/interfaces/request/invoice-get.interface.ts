import { IInvoiceCreateResponse } from './invoice-create.interfaces';

export interface IInvoiceGetAllResponse extends IInvoiceCreateResponse {}

// later vith request object in addition
export interface IInvoiceGetOneResponse extends IInvoiceCreateResponse {}
