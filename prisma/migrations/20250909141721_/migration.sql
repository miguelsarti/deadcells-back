/*
  Warnings:

  - You are about to alter the column `costOfCells` on the `mutacoes` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

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
    "costOfCells" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_mutacoes" ("costOfCells", "createdAt", "description", "howToGet", "id", "imageUrl", "location", "name", "updatedAt") SELECT "costOfCells", "createdAt", "description", "howToGet", "id", "imageUrl", "location", "name", "updatedAt" FROM "mutacoes";
DROP TABLE "mutacoes";
ALTER TABLE "new_mutacoes" RENAME TO "mutacoes";
CREATE UNIQUE INDEX "mutacoes_name_key" ON "mutacoes"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
