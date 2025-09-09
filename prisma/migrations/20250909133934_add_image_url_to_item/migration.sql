/*
  Warnings:

  - Added the required column `imageUrl` to the `itens` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_itens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "howToGet" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_itens" ("createdAt", "description", "howToGet", "id", "location", "name", "updatedAt") SELECT "createdAt", "description", "howToGet", "id", "location", "name", "updatedAt" FROM "itens";
DROP TABLE "itens";
ALTER TABLE "new_itens" RENAME TO "itens";
CREATE UNIQUE INDEX "itens_name_key" ON "itens"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
