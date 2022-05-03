import { Schema, model } from "mongoose";

const fileSchema = new Schema({
  name: String,
  size: String,
  mimeType: String,
  path: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null },
});

const FileModel = model("files", fileSchema);

export { FileModel };
