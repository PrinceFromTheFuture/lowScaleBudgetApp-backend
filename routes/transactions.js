const express = require('express')
const router = express.Router()
const transactionModel = require('../models/transactionModel')
const balanceModel = require('../models/balanceModel')
const budgetModel = require('../models/budgetModel')



router.get('/', async(req,res)=>{
    const allTransactions = await transactionModel.find()
    res.json(allTransactions)
})


router.post('/new', async (req,res)=>{
const transaction = req.body
    const response = await transactionModel.create(transaction)
    
 
    const handleBalanceChange = async()=> {

        const balanceFilter = { title: transaction.target}
        const budgetFilter = {title: transaction.budget}

        let update;
        if(transaction.type == 'outcome'){
            update = { $inc: { balance: -transaction.amount } }
            await budgetModel.findOneAndUpdate(budgetFilter,update )
        }else{
            update = { $inc: { balance: +transaction.amount } }
        }

    
       await balanceModel.findOneAndUpdate(balanceFilter, update )
              
    }
    handleBalanceChange()
    
    
     res.json(response)
})
module.exports  = router