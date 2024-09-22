import Course from "@/models/course";
import { connectToDB } from "@/utils/database";

export const GET = async () => {
  try {
    connectToDB();
    const data = await Course.find({}, "title");
    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Unable to fetch data" }), {
      status: 404,
    });
  }
};
