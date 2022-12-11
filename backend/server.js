require('dotenv').config()

const express = require('express')
const app = express()
const axios = require('axios')
const languageToCode = require('./languageToCode')
const cors = require('cors');

// const corsOption = {
//   origin: ['http://localhost:5173'],
// };

// app.use(cors(corsOption));

app.use(cors())

app.use(express.static(__dirname + '/public'));

app.use(express.json())

app.post('/execute', async (req, res) => {

  let { script, language, stdin } = req.body

  console.log(script, language, stdin);

  if (!script || !language) return res.status(400).json({ statusCode: 400, output: 'Required fields missing.' })

  language = languageToCode[language]
  if (language === undefined) return res.status(400).json({ statusCode: 400, output: 'Language not supported.' })

  const clientId = process.env.clientId
  const clientSecret = process.env.clientSecret
  let versionIndex = 0

  try {
    let response = await axios.post(process.env.compiler_url, {
      clientId,
      clientSecret,
      script,
      language,
      stdin,
      versionIndex
    })
    let data = response.data
    return res.send(data)
  } catch(err) {
    let message = typeof err.response !== "undefined" ? err.response.data.message : err.message
    console.log(message)
    return res.send({
      output: message
    })
  }

})


const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})