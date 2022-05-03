import nodemailer from "nodemailer";
import { mailLayout } from "./template";

class mail {
  private mailTransporter: any;

  constructor() {
    this.mailTransporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: false,
      auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASSWORD,
      },
    });
  }

  async sendMail(from: string, to: string, subject: string, html: string) {
    try {
      await this.mailTransporter.sendMail({
        from: (from && from) || process.env.MAIL_AUTH_USER,
        to,
        subject,
        html: mailLayout(html),
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export { mail };
