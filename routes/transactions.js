const express = require('express')
const router = express.Router()
const transactionModel = require('../models/transactionModel')


router.get('/', async(req,res)=>{
    const allTransactions = await transactionModel.find()
    res.json(allTransactions)
})


router.post('/new', async (req,res)=>{
const transaction = req.body
    const response = await transactionModel.create(transaction)
     res.json(response)
})
module.exports  = router