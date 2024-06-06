-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'COMPLETED');

-- AlterTable
ALTER TABLE "task" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';
