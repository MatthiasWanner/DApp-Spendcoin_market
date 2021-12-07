import {
  IInvoiceCreateResponse,
  IInvoiceGetAllResponse,
  IInvoiceBody,
  IConvertInvoiceOnChain,
  IInvoiceUpdateResponse,
  IInvoiceUpdateArgs,
  IInvoiceGetOneResponseWithRequest
} from '@interfaces/request';
import {
  IGetCurrenciesInfos,
  IGetOneCurrencyInfos
} from '@interfaces/request/currencies-infos.interface';
import { requestApi } from '@utils/api/request';

export const invoices = {
  create: async (body: IInvoiceBody): Promise<IInvoiceCreateResponse> =>
    (await requestApi.post('/invoices', body)).data,

  updateInvoice: async ({
    invoiceId,
    body
  }: IInvoiceUpdateArgs): Promise<IInvoiceUpdateResponse> =>
    (await requestApi.put(`/invoices/${invoiceId}`, body)).data,

  postOnChain: async (invoiceId: string): Promise<IConvertInvoiceOnChain> =>
    (await requestApi.post(`/invoices/${invoiceId}`)).data,

  getOne: async (
    requestId: string
  ): Promise<IInvoiceGetOneResponseWithRequest> =>
    (await requestApi.get(`/invoices/${requestId}?withRequest=true`)).data,

  getAll: async (): Promise<IInvoiceGetAllResponse[]> =>
    (await requestApi.get('/invoices')).data
};

export const currencies = {
  getAll: async (): Promise<IGetCurrenciesInfos[]> =>
    (await requestApi.get('/currency')).data,

  getOne: async (currencyId: string): Promise<IGetOneCurrencyInfos> =>
    (await requestApi.get(`/currency/${currencyId}`)).data
};
