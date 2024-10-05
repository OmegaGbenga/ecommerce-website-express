const express = require('express');
const dbConnect = require('./config/dbconnect');
const authRouter = require ('./routes/authRoute');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const dotenv = require ('dotenv').config();
const app = express();
const PORT = process.env.PORT ||4000;
dbConnect();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:false}))
app.use("/api/user", authRouter);



app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);  
});
