import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log: ['info', 'query']})

async function main(){
  await prisma.todo.create({
    data: {
      title: "prisma",
      description: "have to complete as soon as possible",
      done:true,
      user: {
        connect: {
          id: 1
        }
      }
    }
  })
}

main()
.then(async () =>{
  await prisma.$disconnect()
})
.catch(async (e)=>{
  console.log(e);
  await prisma.$disconnect()
  process.exit(1)
})