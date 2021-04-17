export interface OrderListConfig {
  account: string;

  filters: {
    orderSize?: number,
    orderType?: string,
    action?: string,
    value?: number
  };
}
