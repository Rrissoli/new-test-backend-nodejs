import { Product } from "../../entities/Product";
import ProductModel from "../../models/Product.Model";
import { v4 as uuid } from "uuid"
import mongoose from "mongoose";

class ServiceProduct {
    public async createProduct(product: Product, idOwner: string) {
        try {
            const newProduct = {
                id: uuid(),
                idOwner: idOwner,
                dataCriacao: new Date(),
                ...product
            }
            const response = await ProductModel.create(newProduct)
            return response
        } catch (error) {
            throw new Error(error)
        }
    }
    public async showAllProducts() {
        try {
            const products = await ProductModel.find()
            return products
        } catch (error) {
            throw new Error(error)
        }
    }
    public async findOneById(id: string) {
        try {
            let productFound = await ProductModel.findById({ _id: id })
            if (!productFound) {
                return { message: 'Produto não encontrado' }
            }
            return productFound
        } catch (error) {
            throw new Error(error)
        }
    }
    public async updateProduct(id: string, idOwner: string, body: Product) {
        try {
            let product = await ProductModel.findById({ _id: id, idOwner: idOwner });

            if (!product) {
                throw new Error("Categoria não encontrada");
            }
            const idOwnerObject = new mongoose.Types.ObjectId(idOwner)



            const productUpdate = await ProductModel.updateOne({ _id: id, title: body.title, description: body.description })


            return productUpdate;
        } catch (error) {
            throw new Error(error);
        }
    }
    public async updateCategoryProduct(id: string, idOwner: string, idCategory: string) {
        try {
            let product = await ProductModel.findById({ _id: id, idOwner: idOwner });

            if (!product) {
                throw new Error("Categoria não encontrada");
            }




            const productUpdate = await ProductModel.updateOne({ _id: id, idCategory:idCategory })


            return productUpdate;
        } catch (error) {
            throw new Error(error);
        }
    }


    public async deleteProduct(id: string, idOwner: string) {
        try {
            let product = await ProductModel.findById({ _id: id, idOwner: idOwner });
            if (!Product) {
                throw new Error("Categoria não encontrada");
            }
            const idOwnerObject = new mongoose.Types.ObjectId(idOwner)


            let productDelete = await ProductModel.deleteOne({ _id: id });
            return productDelete;
        } catch (error) {
            throw new Error(error);
        }
    }


}
export default new ServiceProduct()