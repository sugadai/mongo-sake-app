const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const { use } = require('./routes/tasks');
require('dotenv').config();
const PORT = 5000;
const taskRoute = require('./routes/tasks')
app.use(express.json());
app.use(express.static("./public"));
app.use('/api/v1/tasks',taskRoute);

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT,()=>{console.log(PORT + '番ポートでサーバーが起動しました。')});
    }catch (err) {
        console.log(err)
    }
}

start();
