require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json({ extended: true }))
app.use(cors())
app.use('/api/auth', require('./routes/auth.routes'))

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(PORT, () => console.log(`Server has been startes on port ${PORT}...`))
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
