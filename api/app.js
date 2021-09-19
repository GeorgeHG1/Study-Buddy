const express = require('express')
const app = express()
const cors = require('cors');
const port = 4000

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: "GET,POST,OPTIONS",
    credentials: true,
    optionsSuccessStatus: 200
  }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/getQuestions', async (req, res) =>{
    const info = req.body.info
    res.status(200).send({message: info})
    return
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})