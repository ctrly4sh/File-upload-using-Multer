import express from "express";
import upload from "../middlewares/uploadMiddleware";
import { unZIP, getHealth } from "../controller/fileController";

const router = express.Router();

router.get("/health", getHealth);
router.post("/un-zip" , upload.single("file") , unZIP);

export default router;
