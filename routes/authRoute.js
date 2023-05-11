
import express from 'express'
// import { required } from 'nodemon/lib/config';
import {registerController, loginController, testController, forgotPasswordController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

// router object
const router =express.Router()

//routing
//REGISTER :Method post

router.post('/register', registerController);

// LOGIN || POST
router.post('/login', loginController);

// Forget password || POST
router.post("/forgot-password", forgotPasswordController)

// test Routes
router.get('/test', requireSignIn, isAdmin, testController);

//protectected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

//protectected Admin route auth
router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});


export default router;