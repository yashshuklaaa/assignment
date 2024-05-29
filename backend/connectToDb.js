import mongoose from "mongoose"

const connectToDb = async()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('connect to database')
    })

}

export default connectToDb