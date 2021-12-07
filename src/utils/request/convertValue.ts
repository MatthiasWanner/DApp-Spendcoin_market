export const convertIntoChainValue = (
  value: string,
  decimals: string
): string => {
  return Math.round(+value * Math.pow(10, +decimals)).toString();
};
