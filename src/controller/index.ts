import { Router, Request, Response } from "express";
import i18next from "i18next";
import { mail } from "../_common/mail";
import { sendTwilioSms } from "../_common/sms/twillio";
import { uploadController } from "../_common/uploader/controller";

const apiController = Router();

apiController.post("/translate", async (req: Request, res: Response) => {
  res.send("sdfsdf");
});

apiController.use("/upload", uploadController);

export { apiController };
