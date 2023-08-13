import { Owner } from "entities/Owner";
import {v4 as uuid} from 'uuid'
import ownerModel from "../../models/OwnerModel";
import owner from "../../models/OwnerModel";
import { error } from "console";



class ServiceOwner {
    public async  createOwner(owner:Owner) {
        try {
            owner = {
                id : uuid(),
                ...owner
            }
            const response = await ownerModel.create(owner)
            
            console.log(response)
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
    public async  findOwnerById(id:string) {
        try {
            
            const owners = await ownerModel.findById(id)
            return owners
        } catch (error) {
            throw new Error(error)
        }
    }
    public async  update(id:string, body:any) {
        try{
          await owner.updateOne({ _id: id },body)
          const ownerUpdate = await owner.findById(id)
          return ownerUpdate
        }catch(error){
          throw new Error(error)
        }
    }
    public async  delete(id:string) {
        try{
          const ownerDelete = await owner.deleteOne({_id:id})
          return ownerDelete
        }catch(error){
          throw new Error(error)
        }
    }
    
}
export default new ServiceOwner()