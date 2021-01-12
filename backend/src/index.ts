import express from 'express'
import mongoose from 'mongoose'
import { json } from 'body-parser'
import { userRouter } from './routes/users'

var cors = require('cors')

const app = express()
app.use(json())
app.use(userRouter)
app.use(cors())


mongoose.connect('mongodb://localhost:27017/users', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to database')
})

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})