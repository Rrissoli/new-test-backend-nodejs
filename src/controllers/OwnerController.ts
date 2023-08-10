import { Owner } from "entities/Owner";
import ServiceOwner from "../services/Owner/ServiceOwner";

 class OwnerController {
    
public async  postOwner(req,res) {
    try {
        const response = await ServiceOwner.createOwner(req.body)
        res.status(201).send("Owner create")
    } catch (error) {
        throw new Error(error)
    }
}
public async  getAllOwner(req,res) {
    try {
        const response = await ServiceOwner.showAllOwner()
        res.status(200).json(response)
    } catch (error) {
        throw new Error(error)
    }
}
}
export   default  new OwnerController()
