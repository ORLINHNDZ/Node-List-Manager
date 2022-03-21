require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
// middleware
app.use(express.static('./public'))
app.use(express.json())


//routes

//global route
app.use('/api/v1/tasks', tasks)



//api/v1/items/
//api/v1/items/
//api/v1/items/:id
//api/v1/items/:id




const port = 3000

const start = async () => {
    try {

        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
        console.log(`Listening on port ${port}...`)
})
    } catch (err) {
        console.log(err)
    }
}

start()