/*
  Warnings:

  - You are about to drop the column `provider_id` on the `Customer` table. All the data in the column will be lost.
  - Added the required column `provider_id` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provider_id` to the `Complaint` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "total" DECIMAL NOT NULL,
    "customer_id" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Order_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "Provider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("created_at", "customer_id", "id", "updated_at") SELECT "created_at", "customer_id", "id", "updated_at" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE TABLE "new_Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "birthdate" DATETIME NOT NULL,
    "genre" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_Customer" ("birthdate", "created_at", "genre", "id", "name", "updated_at") SELECT "birthdate", "created_at", "genre", "id", "name", "updated_at" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
CREATE TABLE "new_Complaint" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customer_id" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Complaint_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Complaint_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "Provider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Complaint" ("content", "created_at", "customer_id", "id", "updated_at") SELECT "content", "created_at", "customer_id", "id", "updated_at" FROM "Complaint";
DROP TABLE "Complaint";
ALTER TABLE "new_Complaint" RENAME TO "Complaint";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
