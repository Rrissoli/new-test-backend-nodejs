
import { Request, Response } from 'express'
import ServiceProduct from '../services/Product/ServiceProduct'
class ProductsController {
    public async postProduct(req: Request, res: Response): Promise<Response> {
        const idOwner = req.params.idOwner
        try {
            console.log(idOwner)
            const response = await ServiceProduct.createProduct(req.body, idOwner)
            return res.status(201).send("product Created")
        } catch (error) {
            throw new Error(error)
        }
    }
    public async getAllProducts(req :Request, res : Response) {
        try {
            const response = await ServiceProduct.showAllProducts()
            return res.status(200).json(response)
        } catch (error) {
            throw new Error(error)
        }
    }
}
export default new ProductsController()