
import OwnerController from './controllers/OwnerController'
import ProductsController from './controllers/ProductsController'

import {Router} from 'express'
const route = Router()


route.post("/owner", OwnerController.postOwner)
route.get("/owner", OwnerController.getAllOwner)

route.post("/product/:idOwner", ProductsController.postProduct)

export default route