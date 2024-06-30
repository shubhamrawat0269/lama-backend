const jwt = require("jsonwebtoken");
const { userService } = require("../services");

const registerUser = async (req, res) => {
  try {
    const { email } = req.body;

    /* use service layer to create user & return response */
    userService.createUser({ email });
    return res.status(200).json({
      message: "User Created Successfully",
      data: { email },
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

const createProject = async (req, res) => {
  try {
    const { name } = req.body;

    /* use service layer to create project & return response */
    userService.createProject({ name });

    return res.status(200).json({
      message: "Project Created Successfully",
      data: { name },
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

const getFiles = async (req, res) => {
  try {
    /* use service layer to create project & return response */
    const files = await userService.getFileInfo();

    return res.status(200).json({
      message: "All Files",
      data: files,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

const uploadFile = async (req, res) => {
  try {
    const { name, description, status, uploadTime } = req.body;

    /* use service layer to create project & return response */
    const file = await userService.createFile({
      name,
      description,
      status,
      uploadTime,
    });

    return res.status(200).json({
      message: "File Created Successfully",
      data: { name, description, status, uploadTime },
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

const deleteFile = async (req, res) => {
  try {
    const { id } = req.body;

    /* use service layer to create project & return response */
    const file = await userService.deleteFileInfo(id);
    console.log(file);
    return res.status(200).json({
      message: "File Deleted Successfully",
      data: file,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

const editFile = async (req, res) => {
  try {
    const { id, fileDetail } = req.body;

    await userService.editFileInfo(id, fileDetail);

    const file = await userService.getFileById(id);
    console.log(file);
    return res.status(200).json({
      message: "File Updated Successfully",
      data: file,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

module.exports = {
  registerUser,
  createProject,
  uploadFile,
  deleteFile,
  getFiles,
  editFile,
};
