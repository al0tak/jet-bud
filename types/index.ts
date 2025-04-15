export type Account = {
  id: string;
  name: string;
};

export type Transaction = {
  id: string;
  amount: number;
  accountId: string;
  timestamp: string;
};
