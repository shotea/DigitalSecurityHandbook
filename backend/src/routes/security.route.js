const { Router } = require("express");
const {
  checkFile,
  checkParams,
  setupHeaders,
  cryptFileWithSalt,
} = require("../utils/index");
const { algoList } = require("../helper-function/constants");

// Init router and path
const router = Router();

// Add sub-routes
router.post("/encrypt", (req, res) => {
  console.log("----------------------------------------------------");
  console.log("req.body", req.body);
  console.log("----------------------------------------------------");

  if (!req.files || !checkFile(req.files)) {
    return res.status(400).end("Please upload correct file");
  }
  if (!checkParams(req.body)) {
    return res.status(400).end("Please provide correct parameters");
  }

  console.log("----------------------------------------------------");
  console.log("encryption started");
  console.log("----------------------------------------------------");

  const file = req.files.file;
  const encrypted = cryptFileWithSalt(file, false, req.body);
  setupHeaders(res, file);

  console.log("----------------------------------------------------");
  console.log("encrypted", encrypted);
  console.log("----------------------------------------------------");

  res.end(encrypted);
});

router.post("/decrypt", (req, res) => {
  if (!req.files || !checkFile(req.files)) {
    return res.status(400).end("Please upload correct file");
  }
  if (!checkParams(req.body)) {
    return res.status(400).end("Please provide correct parameters");
  }
  const file = req.files.file;
  const decrypted = cryptFileWithSalt(file, true, req.body);
  setupHeaders(res, file);
  res.end(decrypted);
});

router.get("/algorithms", (req, res) => {
  res.send(JSON.stringify(algoList));
});

// Export the base-router
module.exports = router;
