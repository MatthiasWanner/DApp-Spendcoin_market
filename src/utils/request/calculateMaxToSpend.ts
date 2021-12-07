import { utils as ethersUtils } from 'ethers';

export const calculateMaxToSpend = (
  requestAmount: number,
  feeAmount: number,
  conversionRate: number,
  decimals: number,
  slippage: number
) => {
  const cryptoAmount = ((requestAmount + feeAmount) * conversionRate) / 100; // 👈 100 only with Fiat currency as requestAmount

  const maxCryptoAmount = cryptoAmount + (slippage * cryptoAmount) / 100;

  const roundedMaxCryptoAmount = Math.round(maxCryptoAmount * 100) / 100;

  return ethersUtils.parseUnits(roundedMaxCryptoAmount.toString(), decimals);
};
