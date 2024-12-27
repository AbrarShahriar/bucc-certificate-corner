import mongoose from "mongoose";

const recipientSchema = new mongoose.Schema({
  recipientName: {
    type: String,
    required: true,
  },
  recipientEmail: {
    type: String,
    required: true,
    // match: /@g\.bracu\.ac\.bd$/,
  },
  recipientId: {
    type: String,
    required: true,
    match: /^[0-9]{8}$/, // Bracu ID
  },
  previewLink: {
    type: String,
  },
  downloadLink: {
    type: String,
  },
  issueDate: {
    type: Date,
  },
  fb_share: {
    type: String,
  },
  lnkd_share: {
    type: String,
  },
});

const Recipient =
  mongoose.models.recipients || mongoose.model("recipients", recipientSchema);
export type RecipientType = mongoose.InferSchemaType<typeof recipientSchema>;
export default Recipient;
