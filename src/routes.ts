
import CategoryController from './controllers/CategoryController'
import OwnerController from './controllers/OwnerController'
import ProductsController from './controllers/ProductsController'
import {Router} from 'express'
const route = Router()


route.post("/owner", OwnerController.postOwner)
route.get("/owner", OwnerController.getAllOwner)
route.get("/owner/:id", OwnerController.getOneOwnerById)
route.put("/owner/:id", OwnerController.updateOwner)
route.delete("/owner/:id", OwnerController.deleteOwner)

route.post("/product/:idOwner", ProductsController.postProduct)
route.get("/product", ProductsController.getAllProducts)

route.post('/category/:idOwner', CategoryController.postCategory)
route.get('/category', CategoryController.getAllCategory)
export default route