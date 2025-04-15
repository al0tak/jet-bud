import { Transaction } from "@/types";
import { getDb } from "../db";

export const getTransactions = async (): Promise<Transaction[]> => {
  const db = await getDb();
  const transactions = await db.getAllAsync<Transaction>(
    "SELECT id, amount, accountId, timestamp FROM transactions;"
  );

  return transactions;
};
