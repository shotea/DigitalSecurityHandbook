const express = require("express");
const router = express.Router();
const quizController = require("../controller/quiz.controller");

router.get("/", quizController.getItems);
router.get("/by-id/:id", quizController.getItemById);
router.post("/", quizController.insertItem);
router.put("/by-id", quizController.updateItem);
router.delete("/by-id/:id", quizController.deleteItemById);

module.exports = router;
