import { Router } from "express";
import {
  BookMarkHandling,
  courseAdding,
  courseDelete,
  courseimageRetrival,
  courseprofileUploadController,
  CourseRetrivalBasingOnUserCount,
  courseTakenHandling,
  courseUpdate,
  fileRetrival,
  GetCourseByCategory,
  getCourses,
  userIncrement,
} from "../controllers/CourseController";
import { CourseFileAdding } from "../controllers/CourseController";
import CourseUpload from "../middlewares/CourseUpload";
import upload from "../middlewares/profile";

const CourseRoutes = Router();
CourseRoutes.post("/add/:userId", courseAdding);
CourseRoutes.get("/", getCourses);
CourseRoutes.put("/update/:userId", courseUpdate);
CourseRoutes.delete("/delete/:userId", courseDelete);
CourseRoutes.get("/file/:fileName", fileRetrival);
CourseRoutes.post("/add_file", CourseUpload.single("file"), CourseFileAdding);
CourseRoutes.get("/get_courses/:category", GetCourseByCategory);
CourseRoutes.put(
  "/upload_profile/:id",
  upload.single("ProfilePicture"),
  courseprofileUploadController
);
CourseRoutes.get("/image/:ImageName", courseimageRetrival);
CourseRoutes.put("/course_taken_handle/:userId", courseTakenHandling);
CourseRoutes.put("/bookmark/:userId", BookMarkHandling);
CourseRoutes.put("/user_increment/:courseId", userIncrement);
CourseRoutes.get("/descending_retrival", CourseRetrivalBasingOnUserCount);
export default CourseRoutes;
