import express from "express"
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController } from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//router

router.post(
    "/create-product",
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
  );

  //get products
  router.get('/get-product', getProductController)
//get single product
  router.get('/get-product/:slug', getSingleProductController)

  // get photo
  router.get('/product-photo/:pid',productPhotoController )

  //delete product
  router.delete('/product', deleteProductController);

  //update producet
  router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );

  
export default router;
