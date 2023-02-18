const express = require('express');
const app = express();

const path = require('path');
const Port = process.env.PORT || 5000;





app.get("/",(req, res)=>{
 res.json({"data":"home"})
 })





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