import multer, { Multer } from "multer";
import path from "path";
import { Request } from "express";

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads"); // Use the resolved uploads path
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()} ~ ${file.originalname}`);
  },
});

// File filter: Accept only ZIP files
const fileFilter = (req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback) => {
  const fileType = path.extname(file.originalname).toLowerCase();

  if (fileType !== ".zip") {
    const error = new Error("Invalid file type. Only ZIP files are allowed.") as any;
    return callback(error, false); // Reject the file
  }
  
  // Accept the file
  callback(null, true);
};

// Multer instance
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  // limits: { fileSize: 10 * 1024 * 1024 }, // Uncomment if you want to limit file size
});

export default upload;
