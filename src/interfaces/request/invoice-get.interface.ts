import { IRequestData } from '@requestnetwork/types/dist/client-types';
import { IInvoiceCreateResponse } from './invoice-create.interfaces';

export interface IInvoiceGetAllResponse extends IInvoiceCreateResponse {}

export interface IInvoiceGetOneResponse extends IInvoiceCreateResponse {}

// Other unused keys are avaible in fisrt level of request
export interface IInvoiceGetOneResponseWithRequest
  extends IInvoiceGetOneResponse {
  request: {
    request?: IRequestData;
  };
}
