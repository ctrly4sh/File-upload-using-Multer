import multer, { Multer } from "multer";
import path from "path";
import { Request } from "express";

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
         callback(null , "/uploads")
    },
    filename: (req, file , callback) => {
        callback(null, `${Date.now()} ~ ${file.originalname}`);
    },
});

const fileFilter = (req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback) => {
    const fileType = path.extname(file.originalname).toLowerCase();
  
    if (fileType !== ".zip") {
        const error = new Error("Invalid file type , Only zips are allowed") as any;
        error.code = "INVALID_FILE_TYPE";
    //   return callback(new Error("Invalid file type , Only zips are allowed"`) , false); 
    //   console.log("Invalid file type , Only zips are allowed"); 
        callback(error , true)
    }
    //Accept the file : type -> zip
    callback(null, true); 
  };

  const uploadMiddleWare = multer({
    storage : storage,
    fileFilter: fileFilter,
    // limits //Limit the size of uploading 
  }).single("zipfile");

  export default uploadMiddleWare;