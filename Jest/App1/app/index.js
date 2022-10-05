require('dotenv').config()

const server=require('./routes/routes')
const express=require('express')
const app=express()

app.use('/', server)

app.listen(process.env.HOST || 3003)
