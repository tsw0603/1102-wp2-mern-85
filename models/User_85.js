import mongoose from "mongoose";
import validator  from "validator";
import bcrypt from 'bcryptjs';
//import jwt from 'jsonwebtoken'

const UserSchema_85=new mongoose.Schema({
    name:{
        type: String,
        requires:[true,'please provide neme'],
        minlength:3,
        maxlength:20,
        trim:true,
    },
    email:{
        type: String,
        requires:[true,'please provide email'],
        validate:{
            validator:validator.isEmail,
            message:'please provide valid email'
        },
        unique:true
    },
    password:{
        type: String,
        requires:[true,'please provide password'],
        minlength:6,
        select:true
    },
    lastName:{
        type: String,
        trim:true,
        maxlength:30,
        default:'lastName'
        
    },
    location:{
        type: String,
        trim:true,
        maxlength:30,
        default:'my city'
        
    },
});

UserSchema_85.pre('save',async function(){
    console.log('password',this.password);
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});

export default mongoose.model('User_85', UserSchema_85);