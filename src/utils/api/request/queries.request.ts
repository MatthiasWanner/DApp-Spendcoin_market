import {
  IBuyerInfos,
  IInvoiceCreateResponse,
  IInvoiceGetOneResponse,
  IInvoiceGetAllResponse
} from '@interfaces/request';
import { requestApi } from '@utils/api/request';

export const invoices = {
  create: async (data: IBuyerInfos): Promise<IInvoiceCreateResponse> =>
    (await requestApi.post('/invoices', { ...data })).data, // TODO: add rest of body with model

  getOne: async (requestId: string): Promise<IInvoiceGetOneResponse> =>
    (await requestApi.get(`/invoices/${requestId}?withRequest=true`)).data,

  getAll: async (): Promise<IInvoiceGetAllResponse[]> =>
    (await requestApi.get('/invoices')).data
};
