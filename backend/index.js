const express = require('express')

const app  = express()
app.use(express.json())



app.use('/', (req,res)=>{
    res.send('hello world')
})

app.listen(8000,()=>{
    console.log('server is running at 8000')
})