import { Product } from "entities/Product";
import { v4 as uuid } from "uuid"
const products = []
class ServiceProduct {
    public async createProduct(product: Product, idOwner: string) {
        try {
            const newProduct = {
                id: uuid(),
                idOwner: idOwner,
                dataCriacao: new Date(),
                ...product
            }
            const response = products.push(newProduct)
            return response
        } catch (error) {
            throw new Error(error)
        }
    } 
    public async showAllProducts() {
        try {
            
            return products
        } catch (error) {
            throw new Error(error)
        }
    }

}
export default new ServiceProduct()