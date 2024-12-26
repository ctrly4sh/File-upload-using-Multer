import express from "express";
import upload from "../middlewares/uploadMiddleware";
import { uploadZip, getHealth } from "../controller/fileController";

const router = express.Router();

router.get("/health", getHealth);
router.post("/upload" , upload.single("file") , uploadZip);
router.post("/unzip" , upload.single("file") , unZip);

export default router;
