import express from 'express';
const app = express();
const port = 3000;
import cookieParser from 'cookie-parser';

//connection to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mayalevy20:e0ok6g2sVajOLOhu@cluster0.emeus.mongodb.net/calcalil').then(()=>{
  console.log('connected to db')
})
.catch((err:any)=>{
  console.log(err)
});



app.use(express.json());
app.use(cookieParser());



app.use(express.static('public'));



app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})