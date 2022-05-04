import { Twilio } from "twilio";

export const sendTwilioSms = async (to: string, body: string) => {
  try {
    const client = new Twilio(
      process.env.TWILLIO_SID,
      process.env.TWILLIO_TOKEN
    );

    const sms = await client.messages.create({
      from: `${process.env.ADMIN_PHONE}`,
      to,
      body,
    });
  } catch (e) {
    console.log(e);
  }
};
