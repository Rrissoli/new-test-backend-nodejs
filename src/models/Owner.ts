import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema(
    {
        id: {type: String, require: true, unique: true},
        name: {type:String, require: true},
        email:{ type : String , require: true}
    }
)

const owner = mongoose.model('Owner')

export default owner
