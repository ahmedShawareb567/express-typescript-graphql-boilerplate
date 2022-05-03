import { Router, Request, Response } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { FileModel } from "../model";

const uploadController = Router();

const splitFileName = (file: any) => {
  const currentFile = file.split(".");
  return {
    name: currentFile[0],
    extension: currentFile[1],
  };
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const currentDirectory = `${process.cwd()}/public/${
      req.body.destination ? req.body.destination : "default"
    }`;

    if (!fs.existsSync(currentDirectory)) {
      fs.mkdirSync(currentDirectory);
    }

    cb(null, currentDirectory);
  },
  filename: async function (req, file, cb) {
    const currentFile = splitFileName(file.originalname);
    cb(null, `${currentFile.name}-${Date.now()}.${currentFile.extension}`);
  },
});

const upload = multer({ storage:storage });

uploadController.post(
  "/",
  [upload.single("file")],
  async (req: Request, res: Response) => {
    const currentFile = splitFileName(req.file?.originalname);

    const currentPath: any = req.file?.path.split("public");

    const createdFile = await FileModel.create({
      name: currentFile.name,
      path: currentPath[1],
      size: req.file?.size,
      mimeType: req.file?.mimetype,
    });

    res.json({
      data: createdFile,
      success: true,
      message: "File uploaded Successfully",
    });
  }
);

export { uploadController };
