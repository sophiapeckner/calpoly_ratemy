const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  Comment: { type: String, default: null },
  Rating: { type: Number, default: null },
});

const OrganizationSchema = new mongoose.Schema({
  Id: String,
  Name: String,
  ShortName: String,
  WebsiteKey: String,
  ProfilePicture: String,
  Description: String,
  Summary: String,
  CategoryNames: [String],
  Rating: { type: Number, default: null },
  TotalRatings: { type: Number, default: 0 },
  Comments: [commentSchema],
});

const OrganizationModel = mongoose.model("organizations", OrganizationSchema);
module.exports = OrganizationModel;
