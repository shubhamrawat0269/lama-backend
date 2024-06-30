const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    uploadTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = fileSchema;
