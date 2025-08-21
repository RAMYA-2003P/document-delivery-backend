// const mongoose = require('mongoose');

// const RequestSchema = new mongoose.Schema({
//   articleTitle: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ['Pending', 'Processing', 'Fulfilled', 'Rejected'],
//     default: 'Pending',
//   },
//   requestedBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   requestedAt: {
//     type: Date,
//     default: Date.now,
//   },
//   authorDetails: String,
//   publicationDetails: String,
//   doi: String,
//   url: String,
//   fileUrl: String,
//   comments: String,
// });

// module.exports = mongoose.model('Request', RequestSchema);



// const mongoose = require('mongoose');

// const requestSchema = new mongoose.Schema({
//   articleTitle: { type: String, required: true },
//   status: { type: String, enum: ['Pending', 'Processing', 'Completed'], default: 'Pending' },
//   articleFile: { type: String }, // URL or filename of uploaded article by admin
//   requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   requestedAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Request', requestSchema);


// const mongoose = require('mongoose');

// const requestSchema = new mongoose.Schema({
//   requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   name: { type: String, required: true },          // optionally store user details for quick ref
//   email: { type: String, required: true },
//   prn: { type: String, required: true },
//   department: { type: String, required: true },
//   articleTitle: { type: String, required: true },
//   authorDetails: String,
//   publicationDetails: String,
//   doi: String,
//   url: String,
// }, { timestamps: true });

// module.exports = mongoose.model('Request', requestSchema);


const mongoose = require("mongoose");
const { request } = require("../app");

const articleRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  prn: String,
  name: String,
  email: String,
  department: { type: String, required: true },
  articleTitle: { type: String, required: true },
  authorDetails: String,
  publicationDetails: String,
  doi: String,
  url: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ArticleRequest", articleRequestSchema,requests);