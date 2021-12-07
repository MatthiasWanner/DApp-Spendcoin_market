export const invoiceBody = {
  meta: {
    format: 'rnf_invoice',
    version: '0.0.3'
  },
  sellerInfo: {
    businessName: 'SpendCoin',
    address: {
      'country-name': 'France',
      'street-address': '110 RTE DU TEVELAVE',
      'postal-code': '97425',
      locality: 'Les Avirons'
    },
    email: 'devs.digitalcopilote@gmail.com',
    firstName: 'Thibaut',
    lastName: 'Lefort',
    taxRegistration: 'FR77898900121'
  },
  paymentCurrency: process.env.NODE_PUBLIC_PAYMENT_CURRENCY || 'FAU-rinkeby',
  paymentAddress: process.env.NEXT_PUBLIC_PAYMENT_ADDRESS
};
