import { IRequestData } from '@requestnetwork/types/dist/client-types';
import { IInvoiceCreateResponse } from './invoice-create.interfaces';

export interface IInvoiceGetAllResponse extends IInvoiceCreateResponse {}

// later vith request object in addition
export interface IInvoiceGetOneResponse extends IInvoiceCreateResponse {}

export interface IInvoiceGetOneResponseWithRequest
  extends IInvoiceGetOneResponse {
  request: {
    request: IRequestData;
  };
}
