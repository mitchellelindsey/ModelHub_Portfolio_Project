const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./routes/auth.route')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World'))
app.use('/api/auth', authRouter)


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@modelhub.2s7fk.mongodb.net/?retryWrites=true&w=majority&appName=modelhub`).then(() => {
    console.log('Database is connected')
    app.listen(process.env.PORT, () => console.log('Port Available'))
})
