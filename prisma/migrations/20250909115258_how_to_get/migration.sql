/*
  Warnings:

  - Added the required column `howToGet` to the `celulas` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_celulas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "howToGet" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_celulas" ("createdAt", "description", "id", "imageUrl", "name", "updatedAt") SELECT "createdAt", "description", "id", "imageUrl", "name", "updatedAt" FROM "celulas";
DROP TABLE "celulas";
ALTER TABLE "new_celulas" RENAME TO "celulas";
CREATE UNIQUE INDEX "celulas_name_key" ON "celulas"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
