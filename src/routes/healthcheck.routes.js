import { Router } from "express";
import { healthCheck } from "../controllers/healcheck.controllers.js";

const router = Router();


router.route("/").get(healthCheck)


export default router