import {
  IInvoiceCreateResponse,
  IInvoiceGetOneResponse,
  IInvoiceGetAllResponse,
  IInvoiceBody,
  IConvertInvoiceOnChain
} from '@interfaces/request';
import { requestApi } from '@utils/api/request';

export const invoices = {
  create: async (body: IInvoiceBody): Promise<IInvoiceCreateResponse> =>
    (await requestApi.post('/invoices', body)).data,

  postOnChain: async (invoiceId: string): Promise<IConvertInvoiceOnChain> =>
    (await requestApi.post(`/invoices/${invoiceId}`)).data,

  getOne: async (requestId: string): Promise<IInvoiceGetOneResponse> =>
    (await requestApi.get(`/invoices/${requestId}?withRequest=true`)).data,

  getAll: async (): Promise<IInvoiceGetAllResponse[]> =>
    (await requestApi.get('/invoices')).data
};
