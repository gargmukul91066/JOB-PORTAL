const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    resume:{
        type:String
    },
    image:{
        type:String,
        required:true
    }
})

const User=mongoose.model('user',userSchema);

module.exports=User;