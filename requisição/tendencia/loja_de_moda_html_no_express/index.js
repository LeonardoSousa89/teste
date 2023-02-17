import express from 'express'
import log from 'morgan'

import server from './server/index'

const port=[4200, 5500, 3000, 8081]

const app=express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(log('dev'))

app.use('/', server)

app.listen(port[0],()=>console.log(`online in port: ${port[0]}`))
