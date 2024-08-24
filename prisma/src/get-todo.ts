import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const todos = await prisma.todo.findMany({})
  console.log(todos);
  const todo = await prisma.todo.findUnique({
    where: {
      id: 1
    },
    include: {
      user:true
    }
  })
  console.log(todo);
}

main()
.then(async ()=>{
  await prisma.$disconnect()
})
.catch(async (e)=>{
  console.log(e);
  await prisma.$disconnect()
  process.exit(1)
})