import { Request, Response } from "express";
import uploadMiddleWare from "../middlewares/fileUpload";

export const getHealth = async (req: Request, res: Response): Promise<any> => {
  try {
     return res.status(400).json({
      succes: true,
      message: "Server health okay ✅😃",
    });
  } catch (error) {
     return res.json({
      success: false,
      message: error,
    });
  }
};

export const uploadZIP = async (req: Request , res: Response): Promise<any> => {
    try{
        uploadMiddleWare(req, res, (err) => {
            if(err) {
                if(err.code === "INVALID_FILE_TYPE"){
                    return res.status(400).json({
                        success: true,
                        message: "Invalid type"
                    })
                }
            }

            if(!req.file){
                if (!req.file) {
                    return res.status(400).json({
                      success: false,
                      message: "No file uploaded",
               });
            }

            return res.status(201).json({
                success: true,
                message: "File uploaded successfully✅"
            })
        })
    }catch(error){
        return res.status(400).json({
            success: false,
            message: "Error Uploading file ❌"
        })
    }
}
