const express = require('express')
const { createTodo } = require('./types')
const app = express()
const port = 3000
app.use(express.json())

app.post('/todo', (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload)
  if (!parsedPayload.success){
    return res.status(411).json({
      msg: "You sent the wrong inputs"
    })
  }
  
})
app.get('/todos', (req, res) => {

});

app.put('/completed', (req, res) => {

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))