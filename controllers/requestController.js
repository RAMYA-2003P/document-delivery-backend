// const Request = require('../models/Request');

// // @desc    Create new request
// // @route   POST /api/requests
// // @access  Private
// exports.createRequest = async (req, res) => {
//   try {
//     const request = await Request.create({
//       ...req.body,
//       requestedBy: req.user._id
//     });
    
//     res.status(201).json(request);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // @desc    Get user's requests
// // @route   GET /api/requests
// // @access  Private
// exports.getUserRequests = async (req, res) => {
//   try {
//     const requests = await Request.find({ requestedBy: req.user._id })
//       .sort({ requestedAt: -1 })
//       .populate('requestedBy', 'name email');
      
//     res.json(requests);
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };




// const Request = require('../models/Request');

// // Create request
// exports.createRequest = async (req, res) => {
//   try {
//     const request = await Request.create({
//       articleTitle: req.body.articleTitle,
//       requestedBy: req.user._id,
//     });
//     res.status(201).json(request);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Get logged-in user requests
// exports.getUserRequests = async (req, res) => {
//   try {
//     const requests = await Request.find({ requestedBy: req.user._id })
//       .sort({ requestedAt: -1 })
//       .populate('requestedBy', 'name email prn');
//     res.json(requests);
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };



// const Request = require('../models/Request');

// exports.createRequest = async (req, res) => {
//   try {
//     // Extract data from body
//     const {
//       name,
//       email,
//       prn,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     } = req.body;

//     // Create new request document
//     const request = await Request.create({
//       requestedBy: req.user._id,
//       name,
//       email,
//       prn,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     });

//     res.status(201).json({ message: 'Request submitted successfully', request });
//   } catch (err) {
//     console.error('Error creating request:', err);
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.getUserRequests = async (req, res) => {
//   try {
//     const requests = await Request.find({ requestedBy: req.user._id })
//       .sort({ createdAt: -1 })
//       .populate('requestedBy', 'name email prn');
//     res.json(requests);
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };



// const ArticleRequest = require("../models/ArticleRequest");

// exports.submitRequest = async (req, res) => {
//   const {
//     userId,
//     prn,
//     name,
//     email,
//     department,
//     articleTitle,
//     authorDetails,
//     publicationDetails,
//     doi,
//     url,
//   } = req.body;

//   if (!userId || !prn || !name || !email) {
//     return res.status(400).json({ error: "User information missing" });
//   }
//   if (!department || !articleTitle) {
//     return res.status(400).json({ error: "Department and Article Title are required" });
//   }

//   try {
//     const newRequest = new ArticleRequest({
//       userId,
//       prn,
//       name,
//       email,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     });

//     await newRequest.save();
//     res.status(201).json({ message: "Article request submitted successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// };



// const ArticleRequest = require("../models/ArticleRequest");

// exports.submitRequest = async (req, res) => {
//   const {
//     prn,
//     name,
//     email,
//     department,
//     articleTitle,
//     authorDetails,
//     publicationDetails,
//     doi,
//     url,
//   } = req.body;

//   if ( !prn || !name || !email) {
//     return res.status(400).json({ error: "User information missing" });
//   }
//   if (!department || !articleTitle) {
//     return res.status(400).json({ error: "Department and Article Title are required" });
//   }

//   try {
//     const newRequest = new ArticleRequest({
//       prn,
//       name,
//       email,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     });

//     await newRequest.save();
//     res.status(201).json({ message: "Article request submitted successfully" });
//   } catch (err) {
//     console.error("Error saving article request:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// };



// const ArticleRequest = require("../models/ArticleRequest");

// exports.submitRequest = async (req, res) => {
//   const { prn, name, email, department, articleTitle, authorDetails, publicationDetails, doi, url } = req.body;
// console.log("Request body received:", req.body); 

//   if (!prn || !name || !email) {
//     return res.status(400).json({ error: "User information missing" });
//   }

//   if (!department || !articleTitle) {
//     return res.status(400).json({ error: "Department and Article Title are required" });
//   }

//   try {
//     const newRequest = new ArticleRequest({
//       prn,
//       name,
//       email,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     });

//     await newRequest.save();
//     res.status(201).json({ message: "Article request submitted successfully" });
//   } catch (err) {
//     console.error("Error saving article request:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// };




// const ArticleRequest = require("../models/ArticleRequest");

// exports.submitRequest = async (req, res) => {
//   const {
//     prn,
//     name,
//     email,
//     department,
//     articleTitle,
//     authorDetails,
//     publicationDetails,
//     doi,
//     url
//   } = req.body;

//   if (!prn || !name || !email) {
//     return res.status(400).json({ error: "User information missing" });
//   }

//   try {
//     const request = new ArticleRequest({
//       prn,
//       name,
//       email,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url
//     });

//     await request.save();
//     res.status(201).json({ message: "Article request submitted" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// };



// // controllers/articleRequestController.js
// const ArticleRequest = require('../models/ArticleRequest');

// exports.submitRequest = async (req, res) => {
//   try {
//     const { department, articleTitle, authorDetails, publicationDetails, doi, url } = req.body;

//     if (!department || !articleTitle) {
//       return res.status(400).json({ error: "Department and Article Title are required" });
//     }

//     const newRequest = new ArticleRequest({
//       user: req.user.id, // from decoded token
//       prn: req.user.prn, // from decoded token
//       name: req.user.name, // from decoded token
//       email: req.user.email, // from decoded token
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     });

//     await newRequest.save();

//     res.status(201).json({ message: "Article request submitted successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// };



// const ArticleRequest = require('../models/ArticleRequest');

// exports.submitRequest = async (req, res) => {
//   try {
//     const {
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     } = req.body;

//     if (!department || !articleTitle) {
//       return res.status(400).json({ error: 'Department and Article Title are required' });
//     }

//     const newRequest = new ArticleRequest({
//       user: req.user.id,       // from token
//       prn: req.user.prn,
//       name: req.user.name,
//       email: req.user.email,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     });

//     await newRequest.save();

//     res.status(201).json({ message: 'Article request submitted successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };



// const ArticleRequest = require('../models/ArticleRequest');

// exports.submitRequest = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       prn,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     } = req.body;

//     if (!name || !email || !prn || !department || !articleTitle) {
//       return res.status(400).json({ error: 'Required fields are missing' });
//     }

//     const newRequest = new ArticleRequest({
//       name,
//       email,
//       prn,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     });

//     await newRequest.save();

//     res.status(201).json({ message: 'Article request submitted successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// };


// const ArticleRequest = require('../models/ArticleRequest');

// exports.submitRequest = async (req, res) => {
//   try {
//     const { department, articleTitle, authorDetails, publicationDetails, doi, url } = req.body;

//     const newRequest = new ArticleRequest({
//       userId: req.user.id,
//       prn: req.user.prn,
//       name: req.user.name,
//       email: req.user.email,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//       status: 'Pending',
//     });

//     await newRequest.save();
//     res.status(201).json({ message: 'Request submitted successfully' });
//   } catch (error) {
//     console.error('Submit request error:', error);
//     res.status(500).json({ message: 'Failed to submit request' });
//   }
// };


// const ArticleRequest = require('../models/ArticleRequest');

// // POST: Submit new request
// exports.submitRequest = async (req, res) => {
//   try {
//     const newRequest = new ArticleRequest({ ...req.body });
//     await newRequest.save();
//     res.status(201).json({ message: 'Request submitted successfully' });
//   } catch (err) {
//     console.error('Error saving request:', err.message);
//     res.status(500).json({ message: 'Server error saving request' });
//   }
// };

// // GET: Get requests by logged-in user's PRN
// exports.getUserRequests = async (req, res) => {
//   try {
//     const userPrn = req.user.prn;
//     const requests = await ArticleRequest.find({ prn: userPrn }).sort({ createdAt: -1 });
//     res.json(requests);
//   } catch (err) {
//     console.error('Error fetching user requests:', err.message);
//     res.status(500).json({ message: 'Error fetching user requests' });
//   }
// };



// const ArticleRequest = require('../models/ArticleRequest');

// // Submit a new article request
// exports.submitRequest = async (req, res) => {
//   const { department, articleTitle, authorDetails, publicationDetails, doi, url } = req.body;

//   try {
//     const newRequest = new ArticleRequest({
//       prn: req.user.prn,
//       name: req.user.name,
//       email: req.user.email,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     });

//     const saved = await newRequest.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(500).json({ message: 'Error submitting request' });
//   }
// };

// // Get requests by logged-in user
// exports.getUserRequests = async (req, res) => {
//   try {
//     const requests = await ArticleRequest.find({ prn: req.user.prn }).sort({ createdAt: -1 });
//     res.json(requests);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching your requests' });
//   }
// };

// // Get all article requests (admin or general)
// exports.getAllRequests = async (req, res) => {
//   try {
//     const requests = await ArticleRequest.find().sort({ createdAt: -1 });
//     res.json(requests);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching all requests' });
//   }
// };


// const ArticleRequest = require('../models/ArticleRequest');

// // Submit a new article request
// exports.submitRequest = async (req, res) => {
//   const { department, articleTitle, authorDetails, publicationDetails, doi, url } = req.body;

//   try {
//     const newRequest = new ArticleRequest({
//       prn: req.user.prn,
//       name: req.user.name,
//       email: req.user.email,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     });

//     const savedRequest = await newRequest.save();
//     res.status(201).json(savedRequest);
//   } catch (error) {
//     console.error('Submit Request Error:', error);
//     res.status(500).json({ message: 'Error submitting request' });
//   }
// };

// // Get requests by logged-in user
// exports.getUserRequests = async (req, res) => {
//   try {
//     const requests = await ArticleRequest.find({ prn: req.user.prn }).sort({ createdAt: -1 });
//     res.json(requests);
//   } catch (error) {
//     console.error('Get User Requests Error:', error);
//     res.status(500).json({ message: 'Error fetching your requests' });
//   }
// };

// // Get all article requests (for admin or general)
// exports.getAllRequests = async (req, res) => {
//   try {
//     const requests = await ArticleRequest.find().sort({ createdAt: -1 });
//     res.json(requests);
//   } catch (error) {
//     console.error('Get All Requests Error:', error);
//     res.status(500).json({ message: 'Error fetching all requests' });
//   }
// };

















// const multer = require('multer');
// const path = require('path');
// const ArticleRequest = require('../models/ArticleRequest');

// // ✅ Submit a new article request
// exports.submitRequest = async (req, res) => {
//   const { department, articleTitle, authorDetails, publicationDetails, doi, url } = req.body;

//   try {
//     const newRequest = new ArticleRequest({
//       prn: req.user.prn,
//       name: req.user.name,
//       email: req.user.email,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     });

//     const savedRequest = await newRequest.save();
//     res.status(201).json(savedRequest);
//   } catch (error) {
//     console.error('Submit Request Error:', error);
//     res.status(500).json({ message: 'Error submitting request' });
//   }
// };

// // ✅ Get requests by logged-in user
// exports.getUserRequests = async (req, res) => {
//   try {
//     const requests = await ArticleRequest.find({ prn: req.user.prn }).sort({ createdAt: -1 });
//     res.json(requests);
//   } catch (error) {
//     console.error('Get User Requests Error:', error);
//     res.status(500).json({ message: 'Error fetching your requests' });
//   }
// };

// // ✅ Get ALL article requests (for admin)
// exports.getAllRequests = async (req, res) => {
//   try {
//     console.log('Fetching all article requests');
//     const requests = await ArticleRequest.find().sort({ createdAt: -1 });
//     res.json(requests);
//   } catch (error) {
//     console.error('Get All Requests Error:', error);
//     res.status(500).json({ message: 'Error fetching all requests' });
//   }
// };

// exports.updateRequestStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     console.log('Updating request ID:', id, 'to status:', status); // debug log

//     const updated = await ArticleRequest.findByIdAndUpdate(
//       id,
//       { status },
//       { new: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ message: 'Request not found' });
//     }

//     res.json(updated);
//   } catch (err) {
//     console.error('Status update error:', err.message);
//     res.status(500).json({ message: 'Failed to update status' });
//   }
// };




// // Configure multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// exports.upload = multer({ storage });

// // Update article with uploaded file
// exports.uploadArticleFile = async (req, res) => {
//   const { id } = req.params;
//   if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

//   try {
//     const updated = await ArticleRequest.findByIdAndUpdate(
//       id,
//       { articleFile: req.file.filename, status: 'Completed' },
//       { new: true }
//     );
//     res.json(updated);
//   } catch (err) {
//     console.error('Upload error:', err);
//     res.status(500).json({ message: 'Failed to upload file' });
//   }
// };


// const multer = require('multer');
// const path = require('path');
// const ArticleRequest = require('../models/ArticleRequest');

// // ✅ Submit a new article request
// exports.submitRequest = async (req, res) => {
//   const { department, articleTitle, authorDetails, publicationDetails, doi, url } = req.body;

//   try {
//     const newRequest = new ArticleRequest({
//       prn: req.user.prn,
//       name: req.user.name,
//       email: req.user.email,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     });

//     const savedRequest = await newRequest.save();
//     res.status(201).json(savedRequest);
//   } catch (error) {
//     console.error('Submit Request Error:', error);
//     res.status(500).json({ message: 'Error submitting request' });
//   }
// };

// // ✅ Get requests by logged-in user
// exports.getUserRequests = async (req, res) => {
//   try {
//     const requests = await ArticleRequest.find({ prn: req.user.prn }).sort({ createdAt: -1 });
//     res.json(requests);
//   } catch (error) {
//     console.error('Get User Requests Error:', error);
//     res.status(500).json({ message: 'Error fetching your requests' });
//   }
// };

// // ✅ Get ALL article requests (for admin)
// exports.getAllRequests = async (req, res) => {
//   try {
//     console.log('Fetching all article requests');
//     const requests = await ArticleRequest.find().sort({ createdAt: -1 });
//     res.json(requests);
//   } catch (error) {
//     console.error('Get All Requests Error:', error);
//     res.status(500).json({ message: 'Error fetching all requests' });
//   }
// };

// // ✅ Update request status (admin)
// exports.updateRequestStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     console.log('Updating request ID:', id, 'to status:', status);

//     const updated = await ArticleRequest.findByIdAndUpdate(
//       id,
//       { status },
//       { new: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ message: 'Request not found' });
//     }

//     res.json(updated);
//   } catch (err) {
//     console.error('Status update error:', err.message);
//     res.status(500).json({ message: 'Failed to update status' });
//   }
// };

// // ✅ Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // unique filename
//   }
// });

// exports.upload = multer({ storage });

// // ✅ Upload file and mark request as Completed
// exports.uploadArticleFile = async (req, res) => {
//   const { id } = req.params;

//   if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

//   try {
//     const updated = await ArticleRequest.findByIdAndUpdate(
//       id,
//       {
//         articleFile: req.file.filename,
//         uploadPath: `uploads/${req.file.filename}`,
//         status: 'Completed',
//         uploadedAt: new Date()
//       },
//       { new: true }
//     );

//     res.json(updated);
//   } catch (err) {
//     console.error('Upload error:', err);
//     res.status(500).json({ message: 'Upload failed' });
//   }
// };





const multer = require('multer');
const path = require('path');
const ArticleRequest = require('../models/ArticleRequest');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables



// Mail sender setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send email
const sendStatusUpdateEmail = async (email, name, title, status) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Document Request Status Updated`,
    text: `Dear ${name},\n\nYour request for the article titled "${title}" has been updated to: "${status}".\n\nRegards,\nAdmin Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
};

// ✅ Submit a new article request
exports.submitRequest = async (req, res) => {
  const { department, articleTitle, authorDetails, publicationDetails, doi, url } = req.body;

  try {
    const newRequest = new ArticleRequest({
      prn: req.user.prn,
      name: req.user.name,
      email: req.user.email,
      department,
      articleTitle,
      authorDetails,
      publicationDetails,
      doi,
      url,
    });

    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    console.error('Submit Request Error:', error);
    res.status(500).json({ message: 'Error submitting request' });
  }
};

// ✅ Get requests by logged-in user
exports.getUserRequests = async (req, res) => {
  try {
    const requests = await ArticleRequest.find({ prn: req.user.prn }).sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    console.error('Get User Requests Error:', error);
    res.status(500).json({ message: 'Error fetching your requests' });
  }
};

// ✅ Get ALL article requests (for admin)
exports.getAllRequests = async (req, res) => {
  try {
    const requests = await ArticleRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    console.error('Get All Requests Error:', error);
    res.status(500).json({ message: 'Error fetching all requests' });
  }
};

// ✅ Update request status (admin) + send email
exports.updateRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const request = await ArticleRequest.findById(id);
    if (!request) return res.status(404).json({ message: 'Request not found' });

    request.status = status;
    await request.save();

    // Send email notification
    await sendStatusUpdateEmail(request.email, request.name, request.articleTitle, status);

    res.json(request);
  } catch (err) {
    console.error('Status update error:', err.message);
    res.status(500).json({ message: 'Failed to update status' });
  }
};

// ✅ Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  }
});
exports.upload = multer({ storage });

// ✅ Upload file and mark request as Completed + send email
exports.uploadArticleFile = async (req, res) => {
  const { id } = req.params;

  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  try {
    const request = await ArticleRequest.findById(id);
    if (!request) return res.status(404).json({ message: 'Request not found' });

    request.articleFile = req.file.filename;
    request.uploadPath = `uploads/${req.file.filename}`;
    request.status = 'Completed';
    request.uploadedAt = new Date();

    await request.save();

    // Send email notification
    await sendStatusUpdateEmail(request.email, request.name, request.articleTitle, 'Completed');

    res.json(request);
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ message: 'Upload failed' });
  }
};
