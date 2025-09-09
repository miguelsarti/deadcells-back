/*
  Warnings:

  - Added the required column `drop` to the `inimigos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_inimigos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "drop" TEXT NOT NULL,
    "isBoss" BOOLEAN NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "personagemId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "inimigos_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "personagens" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_inimigos" ("createdAt", "description", "id", "imageUrl", "isBoss", "location", "name", "personagemId", "releaseYear", "updatedAt") SELECT "createdAt", "description", "id", "imageUrl", "isBoss", "location", "name", "personagemId", "releaseYear", "updatedAt" FROM "inimigos";
DROP TABLE "inimigos";
ALTER TABLE "new_inimigos" RENAME TO "inimigos";
CREATE UNIQUE INDEX "inimigos_name_key" ON "inimigos"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
