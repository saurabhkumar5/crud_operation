let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
const UserModel = require('./model/Users')

let app = express()
app.use(cors())
app.use(express.json())

// mongoose.connect("mongodb://127.0.0.1:2701/crud")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/crudd');
}


app.get('/',(req,res)=>{
     UserModel.find({})
     .then((users)=>res.json(users))
     .catch(err=>res.json(err))
})


app.post('/createUser',(req,res)=>{
   UserModel.create(req.body)
   .then(users=>res.json(users))
   .catch(err=>res.json(err))
})


app.listen(8000,()=>{
    console.log("server is started")
})