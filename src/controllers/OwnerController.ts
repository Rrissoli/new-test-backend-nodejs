import { Owner } from "entities/Owner";
import { createOwner } from "../services/crudOwner/createOwner";

export async function postOwner(req,res) {
    try {
        const response = await createOwner(res.body)
        res.send("Owner create")
    } catch (error) {
        throw new Error(error)
    }
}