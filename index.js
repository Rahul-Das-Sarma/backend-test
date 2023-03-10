const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path');
const Port = process.env.PORT || 5000;
require('dotenv').config()
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO);
mongoose.connection.on('connected',() =>{
    console.log("connected to mongo");
})

require("./models/Hotel")

// app.get("/",(req, res)=>{
//  res.json({"data":"home"})
//  })

app.use(require("./routes/hotels"))
app.use(express.json());


if(process.env.NODE_ENV=="production"){
  app.use(express.static('client/build'));

  app.get("*", (req, res) =>{
    res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
  })
}

app.listen(Port, () => {
  console.log('server is running on port 5000 . . .');
})

