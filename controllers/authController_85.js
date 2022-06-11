import User_85 from "../models/User_85.js";
import { StatusCodes } from "http-status-codes";

const register_85 = async (req, res, next) => {

    console.log('body', req.body);
    const user = await User_85.create(req.body);
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user, token, location: user.location });

    // try{
    // console.log('body', req.body);
    // const user = await User_85.create(req.body);
    // const token = user.createJWT();
    // res.status(201).json({ user, token });
    // } catch(err){
    //     //res.status(500).json({msg:"Error on registering user"})
    //     next(err);
    // }
    
    //res.send('register user -- 湯士緯, 209410785');
};

const login_85 = async (req, res) => {
    console.log('body',req.body);
    const {email,password}=req.body;
    if(!email || !password){
        throw new BadRequestError('please provide all values')
    }

    const user = await User_36.findOne({email}).select('+password');
    
    if(!user){
        throw new UnAuthenticatedError('invalid Credentials')
    }
    console.log('login user',user);

    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        throw new UnAuthenticatedError('Invalid Credentials');
    }

    const token = user.createJWT();
    user.password=undefined;
    res.status(StatusCodes.OK).json({
       user,
       token,
       location: user.location,
   });
};

const updateUser_85 = async (req, res) => {
    res.send('Update user -- 湯士緯, 209410785');
};

export { register_85, login_85, updateUser_85 };