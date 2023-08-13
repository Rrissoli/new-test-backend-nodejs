import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        title:{ type: String, required: true },
        price:{ type: String, required: true },
        description: { type: String, required: true },
        idCategory:{ type: mongoose.Schema.Types.ObjectId, ref: 'categories'},
        idOwner:{ type: mongoose.Schema.Types.ObjectId, ref: 'owners'},
        dataCreate:{ type: Date, default: Date.now, required: true },
        dataUpdate:{ type: Date, default: Date.now, required: true }
    
    }
);

const ProductModel = mongoose.model('products', productSchema);

export default ProductModel;
