"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const QuestionController_1 = require("../controllers/QuestionController");
const questionRoutes = (0, express_1.Router)();
questionRoutes.post("/add/:userId", 
// QuestionUpload.single("file"),
QuestionController_1.questionAdding);
questionRoutes.get("/:quiz_id", QuestionController_1.getQuestions);
// questionRoutes.put("/update/:userId", questionUpdate);
questionRoutes.delete("/delete/:questionId", QuestionController_1.questionDelete);
exports.default = questionRoutes;
