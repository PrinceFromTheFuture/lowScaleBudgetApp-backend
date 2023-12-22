const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newSchema = new Schema({
    title:{type:String},
    amount:{type: Number, required:true},
    description:{type: String, }, 
    date:{type:Date, default: Date.now(), required:true},
    type:{type: String, required:true }, // income|expenss
    target:{type: String, required:true}, // in case of income, taget balance to add, in case of expenss source paid with
    budget:{type: String} //in case of expenss what budget used, does not exists in incomes   
})


const transactionSchema = mongoose.model('transaction', newSchema);
module.exports = transactionSchema