-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "provider_id" TEXT,
    "name" TEXT NOT NULL,
    "birthdate" DATETIME NOT NULL,
    "genre" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Customer_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "Provider" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Customer" ("birthdate", "created_at", "genre", "id", "name", "provider_id", "updated_at") SELECT "birthdate", "created_at", "genre", "id", "name", "provider_id", "updated_at" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
