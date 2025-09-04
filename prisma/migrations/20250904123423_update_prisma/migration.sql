/*
  Warnings:

  - Added the required column `itemId` to the `armas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemId` to the `curas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personagemId` to the `inimigos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personagemId` to the `npcs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "personagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "itens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_armas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "typeOfWeapon" TEXT NOT NULL,
    "costOfCells" INTEGER NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "itemId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "armas_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "itens" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_armas" ("costOfCells", "createdAt", "description", "id", "imageUrl", "location", "name", "releaseYear", "typeOfWeapon", "updatedAt") SELECT "costOfCells", "createdAt", "description", "id", "imageUrl", "location", "name", "releaseYear", "typeOfWeapon", "updatedAt" FROM "armas";
DROP TABLE "armas";
ALTER TABLE "new_armas" RENAME TO "armas";
CREATE UNIQUE INDEX "armas_name_key" ON "armas"("name");
CREATE TABLE "new_curas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "howToGet" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "itemId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "curas_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "itens" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_curas" ("createdAt", "description", "howToGet", "id", "imageUrl", "location", "name", "releaseYear", "updatedAt") SELECT "createdAt", "description", "howToGet", "id", "imageUrl", "location", "name", "releaseYear", "updatedAt" FROM "curas";
DROP TABLE "curas";
ALTER TABLE "new_curas" RENAME TO "curas";
CREATE UNIQUE INDEX "curas_name_key" ON "curas"("name");
CREATE TABLE "new_inimigos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "isBoss" BOOLEAN NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "personagemId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "inimigos_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "personagens" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_inimigos" ("createdAt", "description", "id", "imageUrl", "isBoss", "location", "name", "releaseYear", "updatedAt") SELECT "createdAt", "description", "id", "imageUrl", "isBoss", "location", "name", "releaseYear", "updatedAt" FROM "inimigos";
DROP TABLE "inimigos";
ALTER TABLE "new_inimigos" RENAME TO "inimigos";
CREATE UNIQUE INDEX "inimigos_name_key" ON "inimigos"("name");
CREATE TABLE "new_npcs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "function" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "personagemId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "npcs_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "personagens" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_npcs" ("createdAt", "description", "function", "id", "imageUrl", "location", "name", "releaseYear", "updatedAt") SELECT "createdAt", "description", "function", "id", "imageUrl", "location", "name", "releaseYear", "updatedAt" FROM "npcs";
DROP TABLE "npcs";
ALTER TABLE "new_npcs" RENAME TO "npcs";
CREATE UNIQUE INDEX "npcs_name_key" ON "npcs"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "itens_name_key" ON "itens"("name");
