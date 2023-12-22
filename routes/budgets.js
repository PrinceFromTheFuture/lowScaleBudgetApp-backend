const express = require('express')
const router = express.Router()

const budgetModel = require('../models/budgetModel')




router.get('/', async(req,res)=>{
    const response = await budgetModel.find()
  
     res.json(response)
 })
 
 router.delete('/delete/:id', async(req,res)=>{
     await budgetModel.findByIdAndDelete(req.params.id)
      res.send('action completed')
  })
 
  router.put('/update', async(req,res)=>{
  const newBalance = req.body
   await budgetModel.findByIdAndUpdate(newBalance._id, newBalance )
 
     res.status(200)
  })
 
  router.post('/new', async(req,res)=>{
     const newBalance = req.body
      await budgetModel.create(newBalance)
        
        res.send('actionSucceful')
     })

module.exports  = router