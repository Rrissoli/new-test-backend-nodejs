import { Request, Response } from 'express'
import ServiceCategory from '../services/Category/ServiceCategory'
import { ObjectId } from 'mongodb'
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
    public async getOneCategoryById(req:Request, res: Response): Promise<Response>{
        try {
            const response = await ServiceCategory.findCategoryById(req.params.id)
            if(!response) res.status(404).json({message: 'Not Found'})
            return res.status(200).json(response)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    public async updateCategory(req:Request, res: Response): Promise<Response>{
        try {
            const response = await ServiceCategory.updateCategory(req.params.id, req.params.idOwner, req.body)

            if(!response) res.status(404).json({message: 'Not Found'})
            return res.status(200).json(response)

        } catch (error) {
            return res.status(400).json(error)
        }
    }
    public async deleteCategory(req:Request, res: Response): Promise<Response>{
        try {
            const response = await ServiceCategory.deleteCategory(req.params.id, req.params.idOwner)
            if(!response) res.status(404).json({message: 'Not Found'})
            return res.status(200).json(response)

        } catch (error) {
            return res.status(400).json(error)
        }
    }


}
export default new CategoryController()