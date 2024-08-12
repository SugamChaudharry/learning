const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  next();
  res.status(403).json({
    msg: "asjdhkus"
  })
},
(req,res) => {
  res.send('Hello World! 2')
}
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))