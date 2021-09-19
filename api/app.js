const express = require('express')
const app = express()
const cors = require('cors');
const port = 4000
const fetch = require("node-fetch");


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
    
    let apiBody = {
      prompt: "I have a test on the following text.\n\"\"\"\nJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus. The current visual magnitude of Jupiter is -2.80. Given its brightness, Jupiter should be visible to the naked eye, easily even from highly light polluted areas.\n\"\"\"\nI created questions to answer:\n<|qstart|>\nQ: What is Jupiter named after?\nA: The Roman god Jupiter.\n<|qstart|>\nQ: Jupiter is a ___ giant.\nA: Gas\n<|qstart|>\nQ: How bright is the visual magnitude of Jupiter?\nA: The visual magnitude of Jupiter is -2.80\n<|qstart|>\nQ: Is Jupiter brighter than the Moon?\nA: No, Jupiter is not as bright as the moon.\n<|qstart|>\nQ: What is the mass of Jupiter, relative to the sun?\nA: Jupiter's mass is one-thousandth of the sun.\n<|endoftext|>\n\nI have a test on the following text.\n\"\"\"\nThe solar system consists of the Sun and everything that orbits, or travels around, the Sun. This includes the eight planets and their moons, dwarf planets, and countless asteroids, comets, and other small, icy objects. However, even with all these things, most of the solar system is empty space. The solar system itself is only a small part of a huge system of stars and other objects called the Milky Way galaxy. The solar system orbits around the center of the galaxy about once every 225 million years. The Milky Way galaxy is just one of billions of galaxies that in turn make up the universe. At the center of the solar system is a star called the Sun. It is the largest object in the solar system. Its diameter, or distance through its center, is 865,000 miles (1,392,000 kilometers). In addition, the Sun contains more than 99 percent of all the material in the solar system. The Sun is a very hot ball of hydrogen and helium gases. It has a temperature, at its core, of more than 28,080,000° F (15,600,000° C). It constantly changes the hydrogen in its core into helium. This process gives out huge amounts of radiation, or energy. Living things on Earth depend on this energy, in the form of light and heat.\n\"\"\"\nI created questions to answer:\n<|qstart|>\nQ: What galaxy is our solar system in?\nA: The Milky Way galaxy\n<|qstart|>\nQ: How often does the solar system orbit the milky way.\nA: Once every 225 million years\n<|qstart|>\nQ: What star is at the center of our solar system?\nA: The sun\n<|qstart|>\nQ: What is the diameter of the sun?\nA: 1 392 000 kilometres.\n<|endoftext|>\n\nI have a test on the following text.\n\"\"\"\n"+info+"\n\"\"\"\nI created questions to answer:",
      temperature: 0.6,
      max_tokens: 300,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["<|endoftext|>"]
    }

    let requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization':'Bearer ' },
      body: JSON.stringify(apiBody)
    }
    var i = await fetch('https://api.openai.com/v1/engines/davinci/completions', requestOptions)
    var r = await i.json()

    console.log(apiBody)
    res.status(200).send({message: r.choices[0].text})
    return
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})