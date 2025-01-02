import { Request, Response } from "express";

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

export const unZIP = (req: Request, res: Response): any => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded",
    });
  }

  return res.status(200).json({
    success: true,
    message: "File uploaded successfully",
    file: {
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
    },
  });
  
  
  return res.status(400).json({});
};
