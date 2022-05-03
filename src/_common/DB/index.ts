import mongoose from "mongoose";
import * as dotenv from "dotenv";
import consola from "consola";

dotenv.config();

const dbStart = async () => {
  try {
    await mongoose.connect(`${process.env.DB}`);
    consola.success("DB is connected successfully 🍉");
  } catch (e) {
    console.error(e);
  }
};

export { dbStart };
