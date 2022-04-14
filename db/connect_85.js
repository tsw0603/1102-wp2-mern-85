import mongoose from "mongoose";

const connectDB_85 = (url) => {
    return mongoose.connect(url);
}

export default connectDB_85;