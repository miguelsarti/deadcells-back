/*
  Warnings:

  - You are about to drop the column `function` on the `npcs` table. All the data in the column will be lost.
  - Added the required column `functionNpc` to the `npcs` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_npcs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "functionNpc" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "personagemId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "npcs_personagemId_fkey" FOREIGN KEY ("personagemId") REFERENCES "personagens" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_npcs" ("createdAt", "description", "id", "imageUrl", "location", "name", "personagemId", "updatedAt") SELECT "createdAt", "description", "id", "imageUrl", "location", "name", "personagemId", "updatedAt" FROM "npcs";
DROP TABLE "npcs";
ALTER TABLE "new_npcs" RENAME TO "npcs";
CREATE UNIQUE INDEX "npcs_name_key" ON "npcs"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
