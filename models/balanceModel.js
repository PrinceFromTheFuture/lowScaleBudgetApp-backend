const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newSchema = new Schema({
    title:{type:String, required: true},
    balance: {type: Number, required: true},
    type:{type: String, required: true},
    net: {type: Boolean, required:true}
})


const balanceSchema = mongoose.model('balance', newSchema);
module.exports = balanceSchema