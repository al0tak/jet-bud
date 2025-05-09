import { getAccounts } from "@/queries/accounts/getAccounts";
import { getTransactions } from "@/queries/transactions/getTransactions";
import { Account, Transaction } from "@/types";
import { create } from "zustand";
import { mockAccounts } from "@/mock/accounts";

type StoreState = {
  accounts: Account[];
  transactions: Transaction[];
  initStore: () => Promise<void>;
  addAccount: (name: string) => Promise<void>;
  addTransaction: (
    accountId: string,
    amount: number,
    timestamp: string
  ) => Promise<void>;
};

export const useStore = create<StoreState>((set) => ({
  accounts: [],
  transactions: [],
  initStore: async () => {
    const dbAccounts = await getAccounts();
    const allAccounts = [...dbAccounts, ...mockAccounts];
    set({ accounts: allAccounts });

    const transactions = await getTransactions();
    set({ transactions });
  },
  addAccount: async (name: string) => {},
  addTransaction: async (
    accountId: string,
    amount: number,
    timestamp: string
  ) => {},
}));
