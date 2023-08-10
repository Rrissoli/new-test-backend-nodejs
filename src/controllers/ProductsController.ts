import { createProduct } from "../services/Product/ServiceProduct"
import {Request, Response} from 'express'
class ProductsController {
    public async  postProduct(req : Request,res : Response) : Promise<Response>{
        const idOwner = req.params.idOwner
        try {
            console.log(idOwner)
            const response = await createProduct(req.body, idOwner )
            return res.status(201).send("product Created")
        } catch (error) {
            throw new Error(error)
        }
    }
}
export default new ProductsController()