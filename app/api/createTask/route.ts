import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { task, duedate } = await request.json();
    const response = await prisma.task.create({
      data: {
        task: task,
        duedate: duedate,
      },
    });
    prisma.$disconnect();
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (e) {
    prisma.$disconnect();
    return new Response(JSON.stringify(e), { status: 500 });
  }
}
