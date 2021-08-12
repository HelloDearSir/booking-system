const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');
// db 
const mongoose = require('mongoose');
 const path = require('path')
const app = express();
 //timestapming is good
const { Timestamp } = require('bson');
salt_work_factor = 10;
require("dotenv").config();
//wityhout this i cant login
app.use(
  cors({
    origin: 'https://gittrying.herokuapp.com',
    credentials: true,
  })
);
const Booking = require("./models/Booking");
mongoose.connect('mongodb+srv://Jon:Password@cluster0.mipjc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const port = process.env.PORT || 5000;   
  
  app.get('/todo', function(req,res){
    res.send({tests})
  })


  app.use(express.json());
  app.use(cookieParser());
  app.use("/auth", require("./routers/userRouter"));
   
  if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
  }
 
   
app.listen(port, function() {
    console.log("express is running");
})
