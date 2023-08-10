
import {Request, Response} from 'express'
import ServiceProduct from '../services/Product/ServiceProduct'
class ProductsController {
    public async  postProduct(req : Request,res : Response) : Promise<Response>{
        const idOwner = req.params.idOwner
        try {
            console.log(idOwner)
            const response = await ServiceProduct.createProduct(req.body, idOwner )
            return res.status(201).send("product Created")
        } catch (error) {
            throw new Error(error)
        }
    }
    public async  getProducts(req,res) {
        try {
            
        } catch (error) {
            throw new Error(error)
        }
    }
}
export default new ProductsController()