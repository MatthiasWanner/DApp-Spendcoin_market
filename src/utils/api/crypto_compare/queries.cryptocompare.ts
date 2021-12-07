import { IGetRate } from '@interfaces/crypto_compare';
import axios from 'axios';

export const cryptoCompare = {
  getRate: async (
    inputCurrency: string,
    outputCurrency: string
  ): Promise<IGetRate> =>
    (
      await axios.get(
        `https://min-api.cryptocompare.com/data/price?fsym=${inputCurrency}&tsyms=${outputCurrency}`
      )
    ).data
};
