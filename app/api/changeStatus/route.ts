import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { id, status } = await request.json();
    const response = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    });
    prisma.$disconnect();
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (e) {
    prisma.$disconnect();
    return new Response(JSON.stringify(e), { status: 500 });
  }
}
