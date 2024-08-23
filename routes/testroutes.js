import express from "express";
import { testpostcontroller } from "../controllers/testcontroller.js";

const router = express.Router();

router.post("/test-post", testpostcontroller);

export default router;
