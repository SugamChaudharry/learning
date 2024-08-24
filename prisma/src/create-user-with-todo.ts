import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      username: "sugam2",
      email: "sugam2@gmail.com",
      password: '1234',
      firstName: "sugam",
      lastName: "chaudhary",
      todos: {
        create: [
          {
          title: "prisma",
          description: "have to complete as soon as possible",
          done:true,
        },
        {
          title: "prisma2",
          description: "have to complete as soon as possible",
          done:true,
        }
      ]
      }
    }
  })
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