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
