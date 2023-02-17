import path from 'path'
import express from 'express'

const server=express.Router()

server.route('/tendencia').get((req, res)=>{

    res.sendFile(path.join(__dirname, '../template/index.html'))
})

export default server 