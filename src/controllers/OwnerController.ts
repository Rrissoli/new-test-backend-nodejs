import { Owner } from "entities/Owner";
import { Request, Response } from 'express'
import ServiceOwner from "../services/Owner/ServiceOwner";

class OwnerController {

    public async postOwner(req: Request, res: Response) {
        try {
            
            const response = await ServiceOwner.createOwner(req.body)
            
            res.status(201).send("Owner create")
        } catch (error) {
           return res.status(400).json(error)
        }
    }
    public async getAllOwner(req: Request, res: Response) {
        try {
            const response = await ServiceOwner.showAllOwner()
            return res.status(200).json(response)
        } catch (error) {
           return res.status(400).json(error)
        }
    }
    public async getOneOwnerById(req : Request , res: Response) {
        const idOwner = req.params.id
        try {
            const response = await ServiceOwner.findOwnerById(idOwner)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    public async updateOwner(req:Request, res: Response) : Promise<Response>{
        try {
            const response = await ServiceOwner.update(req.params.id,req.body)
            if(!response){
                return  res.status(503).json({message:"Not found"})
            }
            return res.status(203).json({message:"Atualizado", response})
        } catch (error) {
            return res.status(400).json(error)
        }

    }
    public async deleteOwner(req:Request, res: Response) : Promise<Response>{
        try {
            const response = await ServiceOwner.delete(req.params.id)
            if(!response){
                return  res.status(503).json({message:"Not found"})
            }
            return res.status(203).json({message:"Deleted", response})
        } catch (error) {
            return res.status(400).json(error)
        }

    }
}
export default new OwnerController()

