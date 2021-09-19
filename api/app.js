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

async function getQNA(s) {
    const arr = s.split('\\n')
    const QNA = []
    for (let i = 0; i < arr.length; i+=2){
        QNA.push([arr[i], arr[i+1]])
    }
    return QNA
}

app.post('/getQuestions', async (req, res) =>{
    const info = req.body.info
    const qa = await getQNA(info)
    console.log(qa)
    res.status(200).send({message: qa})
    return
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})