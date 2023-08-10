import { Owner } from "entities/Owner";
import {v4 as uuid} from 'uuid'
const owners = []

export async function createOwner(owner:Owner) {
    try {
        owner = {
            id:uuid(),
            name:owner.name,
            email:owner.email
        }
        const response = owners.push(owner)
        return true;
    } catch (error) {
        throw new Error(error)
    }
}
export async function showAllOwner() {
    try {
        return owners
    } catch (error) {
        throw new Error(error)
    }
}