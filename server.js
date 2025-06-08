const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000

app.use(cors());

const data = require('./houses.json')

app.get('/houses', (req, res) => {
  if (req.query.name == null) res.send(data);
  else{
    let houseName = req.query.name;
    const house = data.filter(d => d.name.toLowerCase().includes(houseName))
    res.send(house);
  }
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})
