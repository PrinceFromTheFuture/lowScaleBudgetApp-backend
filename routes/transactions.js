const express = require('express')
const router = express.Router()
const transactionModel = require('../models/transactionModel')
const balanceModel = require('../models/balanceModel')


router.get('/', async(req,res)=>{
    const allTransactions = await transactionModel.find()
    res.json(allTransactions)
})


router.post('/new', async (req,res)=>{
const transaction = req.body
    const response = await transactionModel.create(transaction)
    
    console.log(transaction)
    const handleBalanceChange = async()=> {

        const balancefilter = { title: transaction.target}
        let balanceUpdate;
        if(transaction.type == 'outcome'){
            balanceUpdate = { $inc: { balance: -transaction.amount } }
        }else{
            balanceUpdate = { $inc: { balance: +transaction.amount } }
        }
        console.log(balanceUpdate)

        const response = await balanceModel.findOneAndUpdate(balancefilter, balanceUpdate )
                console.log(response)
    }
    handleBalanceChange()
    
    
     res.json(response)
})
module.exports  = router