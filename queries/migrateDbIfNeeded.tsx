import { getDb } from "./db";

export default async function migrateDbIfNeeded() {
  const db = await getDb();
  const DATABASE_VERSION = 1;

  const version = await db.getFirstAsync<{
    user_version: number;
  }>("PRAGMA user_version");

  let currentDbVersion = version?.user_version ?? 0;

  if (currentDbVersion >= DATABASE_VERSION) return;

  if (currentDbVersion === 0) {
    await db.execAsync(`
CREATE TABLE accounts (id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL);
      `);

    currentDbVersion = 1;
  }

  if (currentDbVersion === 1) {
    await db.execAsync(`
      CREATE TABLE transactions (
        id TEXT PRIMARY KEY NOT NULL,
        amount REAL NOT NULL,
        accountId TEXT NOT NULL,
        timestamp TEXT NOT NULL
      `);

    currentDbVersion = 2;
  }

  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}
