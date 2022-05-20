import User_85 from "../models/User_85.js";

const register_85 = async (req, res, next) => {

    try{
    console.log('body', req.body);
    const user = await User_85.create(req.body);
    const token = user.createJWT();
    console.log('token',token);

    res.status(201).json({ user, token });
    } catch(err){
        //res.status(500).json({msg:"Error on registering user"})
        next(err);
    }
    
    //res.send('register user -- 湯士緯, 209410785');
};

const login_85 = async (req, res) => {
    res.send('login user -- 湯士緯, 209410785');
};

const updateUser_85 = async (req, res) => {
    res.send('Update user -- 湯士緯, 209410785');
};

export { register_85, login_85, updateUser_85 };