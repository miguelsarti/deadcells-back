/*
  Warnings:

  - You are about to drop the column `releaseYear` on the `roupas` table. All the data in the column will be lost.
  - Added the required column `costOfCells` to the `roupas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_roupas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "howToGet" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "costOfCells" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_roupas" ("createdAt", "description", "howToGet", "id", "imageUrl", "location", "name", "updatedAt") SELECT "createdAt", "description", "howToGet", "id", "imageUrl", "location", "name", "updatedAt" FROM "roupas";
DROP TABLE "roupas";
ALTER TABLE "new_roupas" RENAME TO "roupas";
CREATE UNIQUE INDEX "roupas_name_key" ON "roupas"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
