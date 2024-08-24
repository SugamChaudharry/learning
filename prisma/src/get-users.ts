import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here

  const users = await prisma.user.findMany({});
  // or
  // const users = await prisma.user.findMany({
  //   where: {
  //     email: "sugam@gmail.com"
  //   }
  // })
  console.log(users);

  const user = await prisma.user.findUnique({
    where: {
      id: 1
    },
    include: {
      todos: true
    }
  })
  console.log(user);
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })