import mongoose from "mongoose";

export default async function connectDB() {
    if ( !mongoose.connections[0].readyState ) {
        mongoose.connect(process.env.MONOGO_URI)
        console.log("Connected to DB")
    }
}