const express = require('express')
const mongoose = require('mongoose')
const balanceModel = require('../models/balanceModel')

const router = express.Router()


router.get('/', async(req,res)=>{
   const response = await balanceModel.find()
    res.json(response)
})

router.delete('/delete/:id', async(req,res)=>{
    await balanceModel.findByIdAndDelete(req.params.id)
     res.send('action completed')
 })

 router.put('/update', async(req,res)=>{
 const newBalance = req.body
  await balanceModel.findByIdAndUpdate(newBalance._id, newBalance )

    res.status(200)
 })

 router.post('/new', async(req,res)=>{
    const newBalance = req.body
     await balanceModel.create(newBalance )
      
       res.send('fds')
    })

module.exports = router