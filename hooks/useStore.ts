import { getAccounts } from "@/queries/accounts/getAccounts";
import { getTransactions } from "@/queries/transactions/getTransactions";
import { Account, Transaction } from "@/types";
import { create } from "zustand";
import { mockAccounts } from "@/mock/accounts";

type StoreState = {
  accounts: Account[];
  addAccount: (name: string) => Promise<void>;
  getAccountById: (id: string) => Account | null;

  transactions: Transaction[];
  addTransaction: (
    accountId: string,
    amount: number,
    timestamp: string
  ) => Promise<void>;

  initStore: () => Promise<void>;
};

export const useStore = create<StoreState>((set, get) => ({
  accounts: [],
  addAccount: async (name: string) => {},
  getAccountById(id) {
    return get().accounts.find((account) => account.id === id) ?? null;
  },

  transactions: [],
  addTransaction: async (
    accountId: string,
    amount: number,
    timestamp: string
  ) => {},

  initStore: async () => {
    const dbAccounts = await getAccounts();
    const allAccounts = [...dbAccounts, ...mockAccounts];
    set({ accounts: allAccounts });

    const transactions = await getTransactions();
    set({ transactions });
  },
}));
