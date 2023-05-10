import { IConversion } from '../types/conversion.interface';

export const getConversion = (
  data: IConversion[],
  value: string,
  currency: number | string
) => {
  const index = data.findIndex((item) => item.currency === currency);
  return Number(value) * data[index].value;
};
