import { Transaction } from "@/types";
import { getDb } from "../db";

export const addTransaction = async (
  transaction: Transaction
): Promise<void> => {
  const db = await getDb();

  await db.runAsync(
    "INSERT INTO transactions (id, amount, accountId, timestamp, name, description) VALUES (?, ?, ?, ?, ?, ?)",
    [
      transaction.id,
      transaction.amount,
      transaction.accountId,
      transaction.timestamp,
      transaction.name,
      transaction.description,
    ]
  );
};
