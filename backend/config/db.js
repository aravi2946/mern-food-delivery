import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://aravind:aravind_2022@cluster0.cdqqeg6.mongodb.net/Food_Delivery_App')

        console.log("Database Connected Successfully");
        
        
    } catch (err) {
        console.log("Database connection Failed");
        process.exit(1)
        
    }
}