const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newSchema = new Schema({
    title:{type:String, required: true},
    balance:{type:Number, required: true},
    contributionPercentage: {type: Number, required: true}
})


const budgetSchema = mongoose.model('budget', newSchema);
module.exports = budgetSchema