/*
  Warnings:

  - Added the required column `title` to the `personagens` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_personagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_personagens" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "personagens";
DROP TABLE "personagens";
ALTER TABLE "new_personagens" RENAME TO "personagens";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
