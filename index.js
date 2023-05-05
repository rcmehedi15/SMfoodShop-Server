const express = require('express')
const port = 5000

const cors = require("cors")
const app = express()
app.use(cors());

const fkdata = require('./Data/data.json');
app.get('/', (req, res) => {
  res.send(fkdata);
});


app.listen(port, () => {
  console.log(`SM shop run ${port}`)
})