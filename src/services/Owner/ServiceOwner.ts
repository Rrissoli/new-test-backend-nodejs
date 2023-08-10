import { Owner } from "entities/Owner";
import {v4 as uuid} from 'uuid'
const owners = []

class ServiceOwner {
    public async  createOwner(owner:Owner) {
        try {
            owner = {
                id:uuid(),
                name:owner.name,
                email:owner.email
            }
            const response = owners.push(owner)
            return response;
        } catch (error) {
            throw new Error(error)
        }
    }
    public async  showAllOwner() {
        try {
            return owners
        } catch (error) {
            throw new Error(error)
        }
    }
}
export default new ServiceOwner()