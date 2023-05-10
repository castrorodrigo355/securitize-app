import { IAddress } from '../types/address.interface';

const toggleFav = (address: IAddress): IAddress => ({
  ...address,
  favorite: !address.favorite,
});

const updateBalance = (address: IAddress, value: string): IAddress => ({
  ...address,
  balance: value,
});

export const updateValue = (
  list: IAddress[],
  id: string,
  value: string
): IAddress[] =>
  list.map((item) => (item._id === id ? updateBalance(item, value) : item));

export const toggleFavAddress = (list: IAddress[], id: string): IAddress[] =>
  list.map((item) => (item._id === id ? toggleFav(item) : item));
