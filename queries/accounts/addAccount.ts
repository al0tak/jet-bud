import { Account } from "@/types";
import { getDb } from "../db";

export const addAccount = async (account: Account): Promise<void> => {
  const db = await getDb();

  await db.runAsync("INSERT INTO accounts (id, name) VALUES (?, ?)", [
    account.id,
    account.name,
  ]);
};
