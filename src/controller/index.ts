import { Router, Request, Response } from "express";
import { mail } from "../_common/mail";
import { uploadController } from "../_common/uploader/controller";

const apiController = Router();

apiController.use("/upload", uploadController);

export { apiController };
