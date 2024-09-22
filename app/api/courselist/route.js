import Course from "@/models/course";
import { connectToDB } from "@/utils/database";

export const GET = async (req) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const id = searchParams.get("id");

  try {
    if (id) {
      console.log("IN IF");
      connectToDB();
      const data = await Course.find({}, "title imgSrc").limit(6);
      return new Response(JSON.stringify(data), {
        status: 200,
      });
    } else {
      console.log("IN ELSE");
      connectToDB();
      const data = await Course.find({}, "title");
      return new Response(JSON.stringify(data), {
        status: 200,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: "Unable to fetch data" }), {
      status: 404,
    });
  }
};
