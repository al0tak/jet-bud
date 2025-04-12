import { getDb } from "@/db/db";
import { Account } from "@/types/account";
import { useQuery } from "@tanstack/react-query";

export function useAccounts() {
  return useQuery<Account[]>({
    queryKey: ["accounts"],
    queryFn: async () => {
      const db = await getDb();
      const accounts = await db.getAllAsync<Account>(
        "SELECT id, name FROM accounts;"
      );

      return accounts;
    },
  });
}
