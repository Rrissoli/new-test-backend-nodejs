import { Category } from "entities/Category";
import {v4 as uuid} from 'uuid'
const categories = []
class ServiceCategory {
    public async createCategory(category: Category, idOwner : string) {
        try {
            category = {
                id: uuid(),
                idOwner:idOwner,
                dataCreate:new Date(),
                ...category
                
            }
            const response = categories.push(category)
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }
    public async showAllCategories() {
        try {
            return categories
        } catch (error) {
            throw new Error(error)
        }
    }
}
export default new ServiceCategory()