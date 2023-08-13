import { Category } from "entities/Category";
import CategoryModel from "../../models/CategoryModel";

import mongoose from "mongoose";
import { v4 as uuid } from 'uuid'

class ServiceCategory {
    public async createCategory(category: Category, idOwner: string) {
        try {
            category = {
                id: uuid(),
                idOwner: idOwner,
                dataCreate: new Date(),
                ...category

            }
            const response = await CategoryModel.create(category)
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }
    public async showAllCategories() {
        try {
            let categories = await CategoryModel.find()
            return categories
        } catch (error) {
            throw new Error(error)
        }
    }
    public async findCategoryById(id: string) {
        try {
            let category = await CategoryModel.find({ _id: id })
            if (!category[0]) { throw new Error('Categoria não encontrada') }
            return category
        } catch (error) {
            throw new Error(error)
        }
    }
    public async updateCategory(id: string, idOwner: string, body: Category) {
        try {
            let category = await CategoryModel.findById({ _id: id, idOwner : idOwner});
            
            if (!category) {
                throw new Error("Categoria não encontrada");
            }
            const idOwnerObject = new mongoose.Types.ObjectId(idOwner)
            
            console.log(category)
            
            const categoryUpdate = await CategoryModel.updateOne({ _id: id, title:body.title, description:body.description })


            return categoryUpdate;
        } catch (error) {
            throw new Error(error);
        }
    }

    public async deleteCategory(id: string, idOwner: string) {
        try {
            let category = await CategoryModel.findById({ _id: id, idOwner });
            if (!category) {
                throw new Error("Categoria não encontrada");
            }
            const idOwnerObject = new mongoose.Types.ObjectId(idOwner)
            

            let categoryDelete = await CategoryModel.deleteOne({ _id: id });
            return categoryDelete;
        } catch (error) {
            throw new Error(error);
        }
    }


}
export default new ServiceCategory()