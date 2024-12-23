"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CourseController_1 = require("../controllers/CourseController");
const CourseController_2 = require("../controllers/CourseController");
const profile_1 = __importDefault(require("../middlewares/profile"));
const CourseRoutes = (0, express_1.Router)();
CourseRoutes.post("/add/:userId", CourseController_1.courseAdding);
CourseRoutes.get("/", CourseController_1.getCourses);
CourseRoutes.put("/update/:userId", CourseController_1.courseUpdate);
CourseRoutes.delete("/delete/:userId", CourseController_1.courseDelete);
CourseRoutes.get("/file/:fileName", CourseController_1.fileRetrival);
CourseRoutes.post("/add_file", 
// CourseUpload.single("file"),
CourseController_2.CourseFileAdding);
CourseRoutes.get("/get_courses/:category", CourseController_1.GetCourseByCategory);
CourseRoutes.get("/search", CourseController_1.getCoursesByKeyword);
CourseRoutes.put("/upload_profile/:id", profile_1.default.single("ProfilePicture"), CourseController_1.courseprofileUploadController);
CourseRoutes.get("/image/:ImageName", CourseController_1.courseimageRetrival);
CourseRoutes.put("/course_taken_handle/:userId", CourseController_1.courseTakenHandling);
CourseRoutes.put("/bookmark/:userId", CourseController_1.BookMarkHandling);
CourseRoutes.put("/user_increment/:courseId", CourseController_1.userIncrement);
CourseRoutes.get("/descending_retrival", CourseController_1.CourseRetrivalBasingOnUserCount);
CourseRoutes.get("/descending_retrival_category/:category", CourseController_1.CourseRetrievalByCategoryAndUserCount);
CourseRoutes.get("/rating_retrival/:id", CourseController_1.RatingRetrieval);
CourseRoutes.post("/rating_update/:id", CourseController_1.ratingUpdate);
CourseRoutes.post("/module", CourseController_1.addingModule);
CourseRoutes.get("/fetch/:id", CourseController_1.getQuiz);
CourseRoutes.post("/lesson_adding", CourseController_1.LessonAdding);
exports.default = CourseRoutes;
