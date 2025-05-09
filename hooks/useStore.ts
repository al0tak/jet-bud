import { getAccounts } from "@/queries/accounts/getAccounts";
import { getTransactions } from "@/queries/transactions/getTransactions";
import { Account, Transaction } from "@/types";
import { create } from "zustand";
import { mockAccounts } from "@/mock/accounts";
import uuid from "react-native-uuid";
import { addAccount } from "@/queries/accounts/addAccount";
import { addTransaction } from "@/queries/transactions/addTransaction";

type StoreState = {
  accounts: Account[];
  addAccount: (name: string) => void;
  getAccountById: (id: string) => Account | null;

  transactions: Transaction[];
  addTransaction: (
    accountId: string,
    amount: number,
    timestamp: string,
    name: string,
    description: string
  ) => void;

  initStore: () => Promise<void>;
};

export const useStore = create<StoreState>((set, get) => ({
  accounts: [],
  addAccount: (name: string) => {
    const account: Account = { id: uuid.v4(), name };

    addAccount(account);

    set({ accounts: [...get().accounts, account] });
  },
  getAccountById(id) {
    return get().accounts.find((account) => account.id === id) ?? null;
  },

  transactions: [],
  addTransaction: (
    accountId: string,
    amount: number,
    timestamp: string,
    name: string,
    description: string
  ) => {
    const transaction: Transaction = {
      id: uuid.v4(),
      amount,
      accountId,
      timestamp,
      name,
      description,
    };

    addTransaction(transaction);

    set({ transactions: [...get().transactions, transaction] });
  },

  initStore: async () => {
    const dbAccounts = await getAccounts();
    const allAccounts = [...dbAccounts, ...mockAccounts];
    set({ accounts: allAccounts });

    const transactions = await getTransactions();
    set({ transactions });
  },
}));
