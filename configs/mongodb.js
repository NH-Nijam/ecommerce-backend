import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.Mongodb_url)
        console.log("Database connected !!")
    }catch(err){
        console.error('Database connection Faild !!')
        process.exit(1);
    }
}
export default connectDB ;