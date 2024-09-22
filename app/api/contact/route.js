import { connectToDB } from "@/utils/database";
import Contact from "@/models/contact";

export const POST = async (req) => {
  try {
    const { name, email, course, message } = await req.json();

    await connectToDB();

    const newContact = new Contact({
      name: name,
      email: email,
      course: course,
      message: message,
    });

    await newContact.save();

    return new Response(JSON.stringify(newContact), { status: 201 });
  } catch (error) {
    return new Response("Failed to save team", { status: 500 });
  }
};
