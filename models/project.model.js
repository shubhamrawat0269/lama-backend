const mongoose = require("mongoose");
const projectSchema = require("../schema/project.schema");

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;
