/*
  Warnings:

  - You are about to drop the column `releaseYear` on the `armas` table. All the data in the column will be lost.
  - Added the required column `howToGet` to the `armas` table without a default value. This is not possible if the table is not empty.

*/
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
    "howToGet" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_armas" ("costOfCells", "createdAt", "description", "id", "imageUrl", "location", "name", "typeOfWeapon", "updatedAt") SELECT "costOfCells", "createdAt", "description", "id", "imageUrl", "location", "name", "typeOfWeapon", "updatedAt" FROM "armas";
DROP TABLE "armas";
ALTER TABLE "new_armas" RENAME TO "armas";
CREATE UNIQUE INDEX "armas_name_key" ON "armas"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
