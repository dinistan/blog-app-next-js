import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://dinistanajay:dinistanajay123@cluster0.azdazqe.mongodb.net/blog-app');
    console.log("DB Connected");
}