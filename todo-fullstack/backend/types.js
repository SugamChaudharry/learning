const z = require("zod")

const createTodo = z.object({
  title: z.string(),
  discription: z.string(),
})
const updateTodo = z.object({
  id: Zod.string()
})

module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo
}