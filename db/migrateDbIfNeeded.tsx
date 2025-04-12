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
PRAGMA jounral_mode = 'wal';
CREATE TABLE accounts (id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL);
      `);

    // TEST DATA
    await db.runAsync(
      "INSERT INTO accounts (id, name) VALUES (?, ?)",
      "1",
      "Artem"
    );
    await db.runAsync(
      "INSERT INTO accounts (id, name) VALUES (?, ?)",
      "2",
      "Max"
    );

    currentDbVersion = 1;
  }

  // if (currentVersion === 1) {
  //   More migrations
  // }

  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}
