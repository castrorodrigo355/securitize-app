export interface IAddress {
  _id: string;
  account: string;
  balance: string;
  favorite: boolean;
  firstTx: number | null;
}
