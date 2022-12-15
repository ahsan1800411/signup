/*
  Warnings:

  - A unique constraint covering the columns `[telegram]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[twitter]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "firstName" SET DATA TYPE TEXT,
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "lastName" SET DATA TYPE TEXT,
ALTER COLUMN "company" DROP NOT NULL,
ALTER COLUMN "company" SET DATA TYPE TEXT,
ALTER COLUMN "telegram" DROP NOT NULL,
ALTER COLUMN "twitter" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "password" SET DATA TYPE TEXT,
ALTER COLUMN "userCategory" DROP NOT NULL,
ALTER COLUMN "userCategory" SET DATA TYPE TEXT,
ALTER COLUMN "userImg" DROP NOT NULL,
ALTER COLUMN "userImg" SET DATA TYPE TEXT,
ALTER COLUMN "cardImg" SET DATA TYPE TEXT,
ALTER COLUMN "orderCard" DROP NOT NULL,
ALTER COLUMN "orderCard" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_telegram_key" ON "User"("telegram");

-- CreateIndex
CREATE UNIQUE INDEX "User_twitter_key" ON "User"("twitter");
