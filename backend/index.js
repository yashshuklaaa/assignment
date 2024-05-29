import express from 'express'
import User  from './route/user.route.js'
import connectToDb from './connectToDb.js'
import dotenv from 'dotenv';

const app  = express()

dotenv.config();
connectToDb()

app.use(express.json())
// app.use('/', (req,res)=>{
//     res.send('hello 1312')
// })

app.use('/api',User) 

app.listen(8000,()=>{
    console.log('server is running at 8000')
})