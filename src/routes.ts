import { postOwner } from './controllers/OwnerController'
import {Router} from 'express'
const route = Router()


route.post("/owner", postOwner)


export default route