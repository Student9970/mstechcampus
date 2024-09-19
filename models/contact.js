import { Schema, model, models } from "mongoose";

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/,
      "Invalid Email",
    ],
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
