import { Product } from "entities/Product";
import {v4 as uuid} from "uuid"
const products = []
export async function createProduct(product:Product, idOwner:string) {
    try {
        const newProduct = {
            id:uuid(),
            idOwner:idOwner,
            dataCriacao: new Date(),
            ...product
        }
        const response = products.push(newProduct)
        return response
    } catch (error) {
        throw new Error(error)
    }
}