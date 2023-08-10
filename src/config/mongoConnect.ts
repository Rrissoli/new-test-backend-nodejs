import mongoose from "mongoose";
mongoose.connect('mongodb+srv://raphaelrissoli:123@cluster0.lw392uz.mongodb.net/teste-marketplace')
let db = mongoose.connection
export default db