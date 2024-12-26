import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}todo`
        );
    } catch(err){
        console.log("mongoDb connection Falied" , err)
        process.exit(1);
    }

}
export default connectDB