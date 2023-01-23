const express=require('express')
const server=express.Router()

const service=require('../services')
const { getAllItensUrl }=require('../api')



server.route('/').get((req, res)=>{

    return service.geItens(res,getAllItensUrl)
    
})



module.exports=server 