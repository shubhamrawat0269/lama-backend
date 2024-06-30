const UserModel = require("../models/user.model");
const ProjectModel = require("../models/project.model");
const FileModal = require("../models/file.model");

const createUser = async (user) => {
  await UserModel.create(user);
};

const createProject = async (project) => {
  await ProjectModel.create(project);
};

const getFileInfo = async () => {
  return await FileModal.find();
};

const getFileById = async (id) => {
  return await FileModal.findById({ _id: id });
};

const createFile = async (file) => {
  return await FileModal.create(file);
};

const deleteFileInfo = async (id) => {
  return await FileModal.findByIdAndDelete(id);
};

const editFileInfo = async (id, fileDetail) => {
  const updatedFileData = await FileModal.updateOne({ _id: id }, fileDetail);
  return updatedFileData;
};

module.exports = {
  createUser,
  createProject,
  createFile,
  deleteFileInfo,
  getFileInfo,
  editFileInfo,
  getFileById,
};
