const express = require("express");
const router = express.Router();
const tableContentController = require("../controller/tablecontent.controller");

router.get("/", tableContentController.getItems);
router.post("/", tableContentController.insertItem);
router.put("/by-id", tableContentController.updateItem);
router.delete("/by-id/:id", tableContentController.deleteItemById);

module.exports = router;
