const mongoose = require('mongoose')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')


app.use(express.json());
const corsOptions = {

    optionsSuccessStatus: 200,
  };
app.use( cors(corsOptions));

//models
const transactionModel = require('./models/transactionModel')
const budgetModel = require('./models/budgetModel')
const balanceModel = require('./models/balanceModel')

//Routes
const transactionsRoute = require('./routes/transactions')
const budgetsRoute = require('./routes/budgets')
const balancesRoute = require('./routes/balances')

app.use('/transactions', transactionsRoute)
app.use('/budgets', budgetsRoute)
app.use('/balances', balancesRoute)



dotenv.configDotenv()


app.get('/', async(req,res)=>{
   
    res.json({title:'hedaer'})

})

app.post('/', async(req,res)=>{

    res.send(req.body.title)
})


const startServer = ()=>{
  const port = process.env.PORT || 8080
  app.listen(port, async()=>{
        console.log('server initializing...')
         await mongoose.connect(process.env.MONGODB)    
        console.log(`server running & listening port ${port}`)
    })
}

startServer()