const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel=require('./models/User')

const app=express()
app.use(express.json())

mongoose.connect("mongodb+srv://SumedhaKun:password1234@register.at3upxb.mongodb.net/");

app.post("/login", (req,res)=>{
    const {email,psw}=req.body;
    UserModel.findOne({email:email,password:psw}).then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            } else{
                res.json("fail")
            }
        }
    })
})
app.post("/register", (req,res) => {
    UserModel.create(req.body).then(users=>res.json(users)).catch(err=>res.json(err))
})
app.listen(3001, ()=>{
    console.log("server running");
})
