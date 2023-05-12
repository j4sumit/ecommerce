import express from "express"
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController } from "../controllers/productController.js";
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
export default router;
