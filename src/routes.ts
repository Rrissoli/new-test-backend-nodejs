import { getOwner, postOwner } from './controllers/OwnerController'
import {Router} from 'express'
const route = Router()


route.post("/owner", postOwner)
route.get("/owner", getOwner)



export default route