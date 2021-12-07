export interface IGetCurrenciesInfos {
  id: string;
  name: string;
  symbol: string;
  hash: string;
  address: string;
  decimals: number;
  type: string;
  code: string;
  network: string;
}

export interface IExchangeInfos {
  cryptocompare: {
    code: string;
  };
}

export interface ICurrencyInfosMeta {
  peg: string;
  reference?: Omit<IGetCurrenciesInfos, 'name' | 'code'>;
  exchangeInfo: IExchangeInfos;
}

export interface IGetOneCurrencyInfos extends IGetCurrenciesInfos {
  metadata: ICurrencyInfosMeta;
  exchangeInfo: IExchangeInfos;
}
