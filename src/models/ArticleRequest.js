// // models/ArticleRequest.js
// const mongoose = require('mongoose');

// const ArticleRequestSchema = new mongoose.Schema({
//   prn: String,
//   articleTitle: String,
//   status: String, // e.g. "Submitted", "Processing", "Completed"
//   createdAt: { type: Date, default: Date.now },
//   articleFile: String, // file path or URL if uploaded by admin
// });

// module.exports = mongoose.model('ArticleRequest', ArticleRequestSchema);




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





// const mongoose = require("mongoose");

// const articleRequestSchema = new mongoose.Schema({
//   // userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
//   prn: String,
//   name: String,
//   email: String,
//   department: { type: String, required: true },
//   articleTitle: { type: String, required: true },
//   authorDetails: String,
//   publicationDetails: String,
//   doi: String,
//   url: String,
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("ArticleRequest", articleRequestSchema, "requests"); // <-- fix: 'requests' should be a string



// const mongoose = require("mongoose");

// const articleRequestSchema = new mongoose.Schema({
//   prn: { type: String, required: true },
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   department: { type: String, required: true },
//   articleTitle: { type: String, required: true },
//   authorDetails: String,
//   publicationDetails: String,
//   doi: String,
//   url: String,
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("ArticleRequest", articleRequestSchema, "requests");


// const mongoose = require('mongoose');

// const articleRequestSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // optional but useful
//   prn: { type: String, required: true },
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   department: { type: String, required: true },
//   articleTitle: { type: String, required: true },
//   authorDetails: String,
//   publicationDetails: String,
//   doi: String,
//   url: String,
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('ArticleRequest', articleRequestSchema, 'requests');



const mongoose = require('mongoose');

const articleRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  prn: { type: String, required: true },
  department: { type: String, required: true },
  articleTitle: { type: String, required: true },
  authorDetails: String,
  publicationDetails: String,
  doi: String,
  url: String,
  status: {
    type: String,
    default: 'Pending', // "Approved", "Rejected", "Completed"
  },
  articleFile: String, // path or URL to uploaded file
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });



module.exports = mongoose.model('ArticleRequest', articleRequestSchema, 'requests');
