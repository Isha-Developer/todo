import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const response = await prisma.task.findMany({
      where: {
        status: "PENDING",
      },
    });
    prisma.$disconnect();
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (e) {
    prisma.$disconnect();
    return new Response(JSON.stringify(e), { status: 500 });
  }
}
