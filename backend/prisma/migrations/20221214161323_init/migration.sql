-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "title" TEXT,
    "company" VARCHAR(255) NOT NULL,
    "telegram" VARCHAR(255) NOT NULL,
    "twitter" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "userCategory" VARCHAR(255) NOT NULL,
    "userImg" VARCHAR(255) NOT NULL,
    "cardImg" VARCHAR(255) NOT NULL,
    "orderCard" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
