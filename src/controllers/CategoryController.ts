import { Request, Response } from 'express'
import ServiceCategory from '../services/Category/ServiceCategory'
class CategoryController {

    public async postCategory(req: Request, res: Response): Promise<Response> {
        const idOwner = req.params.idOwner
        try {
            console.log(idOwner)
            const response = await ServiceCategory.createCategory(req.body, idOwner)
            return res.status(201).send("category Created")
        } catch (error) {
            throw new Error(error)
        }
    }
    public async getAllCategory(req: Request, res: Response) {
        try {
            const response = await ServiceCategory.showAllCategories()
            return res.status(200).json(response)
        } catch (error) {
            throw new Error(error)
        }
    }

}
export default new CategoryController()