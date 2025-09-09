/*
  Warnings:

  - You are about to drop the column `releaseYear` on the `mutacoes` table. All the data in the column will be lost.
  - Added the required column `costOfCells` to the `mutacoes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mutacoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "howToGet" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "costOfCells" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_mutacoes" ("createdAt", "description", "howToGet", "id", "imageUrl", "location", "name", "updatedAt") SELECT "createdAt", "description", "howToGet", "id", "imageUrl", "location", "name", "updatedAt" FROM "mutacoes";
DROP TABLE "mutacoes";
ALTER TABLE "new_mutacoes" RENAME TO "mutacoes";
CREATE UNIQUE INDEX "mutacoes_name_key" ON "mutacoes"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
