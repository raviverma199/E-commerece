const express = require('express');
const app = express()
const cors = require('cors');
const mainRoute = require('./routes/route')
const connection = require('./db/connection')


app.use(cors( { origin: true, methods: ['GET', 'POST'] } ))
app.use(express.json())
app.use('/',mainRoute)





app.listen(9090,()=>{
    console.log("Server is running on port 9090")
})