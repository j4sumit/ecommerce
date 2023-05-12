import express from "express"
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";
import  {isAdmin, requireSignIn} from './../middlewares/authMiddleware.js';

const router =express.Router()

//Routes//
//Create Category
router.post('/create-category', 
requireSignIn, 
isAdmin, 
createCategoryController 
);

//update Category
  
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController)

//getAll Category
router.get('/get-category', categoryController);

//single Category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategoryController);
export default router;
