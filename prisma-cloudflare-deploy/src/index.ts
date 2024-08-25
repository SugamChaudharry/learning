import { Hono, Next } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'

const prisma = new PrismaClient().$extends(withAccelerate())
const app = new Hono()

app.post('/', async (c) => {
  // Todo add zod validation here
  await prisma.user.findMany({
		where: {
			email: {
				contains: "alice@prisma.io",
			},
		},
		cacheStrategy: { ttl: 60 },
	});


  return c.json({msg: "as"})
})

export default app
