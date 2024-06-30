const mongoose = require("mongoose");
const fileSchema = require("../schema/fileSchema.schema");

const FileModel = mongoose.model("Files", fileSchema);

module.exports = FileModel;
