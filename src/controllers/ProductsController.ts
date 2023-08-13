
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
    public async getProductById(req :Request, res : Response): Promise<Response> {
        try {
            const response = await ServiceProduct.findOneById(req.params.id)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    public async updateProduct(req:Request, res: Response): Promise<Response>{
        try {
            const response = await ServiceProduct.updateProduct(req.params.id, req.params.idOwner, req.body)

            if(!response) res.status(404).json({message: 'Not Found'})
            return res.status(200).json(response)

        } catch (error) {
            return res.status(400).json(error)
        }
    }
    public async putCAtegoryProduct(req:Request, res: Response): Promise<Response>{
        try {
            const response = await ServiceProduct.updateCategoryProduct(req.params.id, req.params.idOwner, req.params.idCategory)
            if(!response) res.status(404).json({message: 'Not Found'})
            return res.status(200).json(response)

        } catch (error) {
            return res.status(400).json(error)
        }
    }
    public async deleteProduct(req:Request, res: Response): Promise<Response>{
        try {
            const response = await ServiceProduct.deleteProduct(req.params.id, req.params.idOwner)
            if(!response) res.status(404).json({message: 'Not Found'})
            return res.status(200).json(response)

        } catch (error) {
            return res.status(400).json(error)
        }
    }
}
export default new ProductsController()