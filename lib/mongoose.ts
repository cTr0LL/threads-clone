import mongoose from 'mongoose';
let isConnected = false;

export const connectionToDB = async () => {
    mongoose.set('strictQuery',true);
    
    if(!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");
    if(isConnected) return console.log('Connected');

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log("Successfully connected to MongoDB database");
        
    } catch (error) {
        console.log(error);
        
    }
    
}