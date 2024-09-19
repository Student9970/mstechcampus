import { Schema, model, models } from "mongoose";

const CourseSchema = new Schema({
  title: String,
  description: String,
  imgSrc: String,
});

const Course = models.Course || model("Course", CourseSchema);

export default Course;
