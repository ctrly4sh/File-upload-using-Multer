import { Router } from "express";
import { getHealth, uploadZIP } from "../controller/fileController";
import { appendFile } from "fs";

const router = Router();

router.get('/health' , getHealth);
router.post('/upload' , uploadZIP);

export default router;
