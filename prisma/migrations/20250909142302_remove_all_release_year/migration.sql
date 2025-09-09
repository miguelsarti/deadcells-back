/*
  Warnings:

  - You are about to drop the column `releaseYear` on the `inimigos` table. All the data in the column will be lost.
  - You are about to drop the column `releaseYear` on the `npcs` table. All the data in the column will be lost.

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
    "imageUrl" TEXT NOT NULL,
    "personagemId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "inimigos_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "personagens" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_inimigos" ("createdAt", "description", "drop", "id", "imageUrl", "isBoss", "location", "name", "personagemId", "updatedAt") SELECT "createdAt", "description", "drop", "id", "imageUrl", "isBoss", "location", "name", "personagemId", "updatedAt" FROM "inimigos";
DROP TABLE "inimigos";
ALTER TABLE "new_inimigos" RENAME TO "inimigos";
CREATE UNIQUE INDEX "inimigos_name_key" ON "inimigos"("name");
CREATE TABLE "new_npcs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "function" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "personagemId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "npcs_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "personagens" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_npcs" ("createdAt", "description", "function", "id", "imageUrl", "location", "name", "personagemId", "updatedAt") SELECT "createdAt", "description", "function", "id", "imageUrl", "location", "name", "personagemId", "updatedAt" FROM "npcs";
DROP TABLE "npcs";
ALTER TABLE "new_npcs" RENAME TO "npcs";
CREATE UNIQUE INDEX "npcs_name_key" ON "npcs"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
