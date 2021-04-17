export interface Order {
  id: number;
  accountID: number;
  symbol: string;
  price: number;
  orderAction: string;
  orderType: string;
  orderSize: number;
  value: number;
  tradingDate: Date;
}
