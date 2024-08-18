/*
Get -> no of kidneys && health
Post -> +kidney
put -> kidney <-> kidney`
Delete -> -kidney
*/
const express = require('express')
const app = express()
const port = 3000
const users = [
  {
    name: "sugam",
    kidney: [
      {
        healthy:true
      },
      {
        healthy:false
      }
    ]
  }
]

app.get('/', (req, res) => {
  res.send(`
    ${users[0].name} has ${users[0].kidney.length}.
     kidneys and first one is ${users[0].kidney[0].healthy ? "helthy" : "not helthy"}
     and second one is ${users[0].kidney[1].healthy ? "helthy" : "not helthy"}
    `)
})
app.post('/', (req, res) => {
  
})
app.put('/', (req, res) => {

})
app.delete('/', (req, res) => {

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
