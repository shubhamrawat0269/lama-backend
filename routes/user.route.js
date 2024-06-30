const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

// create user
router.post("/register", userController.registerUser);
router.post("/project/create", userController.createProject);
router.get("/files", userController.getFiles);
router.post("/upload-file", userController.uploadFile);
router.post("/delete-file", userController.deleteFile);
router.post("/edit-file", userController.editFile);

module.exports = router;
