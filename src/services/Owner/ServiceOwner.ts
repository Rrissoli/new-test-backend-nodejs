import { Owner } from "entities/Owner";
import {v4 as uuid} from 'uuid'
import ownerModel from "../../models/OwnerModel";


class ServiceOwner {
    public async  createOwner(owner:Owner) {
        try {
            const response = await ownerModel.create(owner)
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }
    public async  showAllOwner() {
        try {
            const owners = await ownerModel.find()
            return owners
        } catch (error) {
            throw new Error(error)
        }
    }
}
export default new ServiceOwner()