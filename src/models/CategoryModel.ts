import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        idOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'owners', required: true },
        dataCreate: { type: Date, default: Date.now, required: true },
        dataUpdate: { type: Date, default: Date.now, required: true }
    }
);

const CategoryModel = mongoose.model('Category', categorySchema);

export default CategoryModel;
