const express = require('express');
const Task = require('./modules/Task')
const app = express();
const PORT = 3000;
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes

app.use('/api/v1/tasks',tasks)

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,console.log(`listning at port ${PORT}...`));

    }catch(error){
        console.log(error)
    }
}

start()