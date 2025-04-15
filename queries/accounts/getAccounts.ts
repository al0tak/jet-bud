import { Account } from "@/types";
import { getDb } from "../db";

export const getAccounts = async (): Promise<Account[]> => {
  const db = await getDb();
  const accounts = await db.getAllAsync<Account>(
    "SELECT id, name FROM accounts;"
  );

  return accounts;
};
