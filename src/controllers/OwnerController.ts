import { Owner } from "entities/Owner";
import { createOwner, showAllOwner } from "../services/crudOwner/createOwner";

export async function postOwner(req,res) {
    try {
        const response = await createOwner(req.body)
        res.status(201).send("Owner create")
    } catch (error) {
        throw new Error(error)
    }
}
export async function getOwner(req,res) {
    try {
        const response = await showAllOwner()
        res.status(200).json(response)
    } catch (error) {
        throw new Error(error)
    }
}
