
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
route.get('/product/:id', ProductsController.getProductById)
route.put('/product/:idOwner/:id', ProductsController.updateProduct)
route.delete('/product/:idOwner/:id', ProductsController.deleteProduct)
route.put('/product/:idOwner/:id/:idCategory', ProductsController.putCAtegoryProduct)

route.post('/category/:idOwner', CategoryController.postCategory)
route.get('/category', CategoryController.getAllCategory)
route.get('/category/:id', CategoryController.getOneCategoryById)
route.put('/category/:idOwner/:id', CategoryController.updateCategory)
route.delete('/category/:idOwner/:id', CategoryController.deleteCategory)
export default route