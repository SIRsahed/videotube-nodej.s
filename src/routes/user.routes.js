import { Router } from "express";
import { registerUser } from "../controllers/user.controllers";
import { upload } from "../middlewares/multer.middlewares.js"

const router = Router();


router.route("/register").post(
  upload.fields(),
  registerUser);


export default router