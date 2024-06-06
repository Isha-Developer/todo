-- CreateTable
CREATE TABLE "task" (
    "id" STRING NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "task" STRING NOT NULL,
    "duedate" STRING NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
