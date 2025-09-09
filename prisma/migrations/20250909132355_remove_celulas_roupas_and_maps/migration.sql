/*
  Warnings:

  - You are about to drop the `celulas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `curas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mapas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roupas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `itemId` on the `armas` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "celulas_name_key";

-- DropIndex
DROP INDEX "curas_name_key";

-- DropIndex
DROP INDEX "mapas_name_key";

-- DropIndex
DROP INDEX "roupas_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "celulas";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "curas";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "mapas";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "roupas";
PRAGMA foreign_keys=on;

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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_armas" ("costOfCells", "createdAt", "description", "id", "imageUrl", "location", "name", "releaseYear", "typeOfWeapon", "updatedAt") SELECT "costOfCells", "createdAt", "description", "id", "imageUrl", "location", "name", "releaseYear", "typeOfWeapon", "updatedAt" FROM "armas";
DROP TABLE "armas";
ALTER TABLE "new_armas" RENAME TO "armas";
CREATE UNIQUE INDEX "armas_name_key" ON "armas"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
