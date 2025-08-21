// // routes/articleRequests.js
// const express = require('express');
// const router = express.Router();
// const ArticleRequest = require('../models/ArticleRequest');

// // Get requests by PRN
// router.get('/user/requests/:prn', async (req, res) => {
//   try {
//     const { prn } = req.params;
//     const requests = await ArticleRequest.find({ prn }).sort({ createdAt: -1 });
//     res.json(requests);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch article requests' });
//   }
// });

// // Download article file by request id
// router.get('/:id/download', async (req, res) => {
//   try {
//     const request = await ArticleRequest.findById(req.params.id);
//     if (!request || !request.articleFile) {
//       return res.status(404).json({ error: 'File not available' });
//     }
//     // assuming articleFile is the absolute path on server
//     res.download(request.articleFile);
//   } catch (err) {
//     res.status(500).json({ error: 'Download failed' });
//   }
// });

// module.exports = router;




// const express = require('express');
// const router = express.Router();
// const ArticleRequest = require('../models/ArticleRequest');

// // Submit a new article request (POST /api/article-requests)
// router.post('/', async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       prn,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     } = req.body;

//     const newRequest = new ArticleRequest({
//       name,
//       email,
//       prn,
//       department,
//       articleTitle,
//       authorDetails,
//       publicationDetails,
//       doi,
//       url,
//     });

//     await newRequest.save();
//     res.status(201).json({ message: 'Article request submitted successfully' });
//   } catch (error) {
//     console.error('Error saving article request:', error);
//     res.status(500).json({ message: 'Server error while submitting request' });
//   }
// });

// // Get all requests by PRN
// router.get('/user/requests/:prn', async (req, res) => {
//   try {
//     const { prn } = req.params;
//     const requests = await ArticleRequest.find({ prn }).sort({ createdAt: -1 });
//     res.json(requests);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch article requests' });
//   }
// });

// // Download article file by ID
// router.get('/:id/download', async (req, res) => {
//   try {
//     const request = await ArticleRequest.findById(req.params.id);
//     if (!request || !request.articleFile) {
//       return res.status(404).json({ error: 'File not available' });
//     }
//     res.download(request.articleFile);
//   } catch (err) {
//     res.status(500).json({ error: 'Download failed' });
//   }
// });

// module.exports = router;



// routes/articleRequests.js

// const express = require('express');
// const router = express.Router();
// const authMiddleware = require('../middleware/authMiddleware');
// const ArticleRequest = require('../models/ArticleRequest');

// router.get('/my-requests', authMiddleware, async (req, res) => {
//   try {
//     console.log('User from token:', req.user); // debug

//     const userPrn = req.user.prn;
//     const requests = await ArticleRequest.find({ prn: userPrn }).sort({ createdAt: -1 });
//     res.json(requests);
//   } catch (err) {
//     console.error('Error fetching requests:', err);
//     res.status(500).json({ message: 'Server error fetching requests' });
//   }
  
//   const express = require('express');
//   const router = express.Router();
//   const { submitRequest, getUserRequests, getAllRequests } = require('../controllers/requestController');
//   const { protect } = require('../middleware/authMiddleware');
  
//   router.post('/', protect, submitRequest);
//   //router.get('/my-requests', protect, getUserRequests);
//   router.get('/all-requests', protect, getUserRequests);
  
//   module.exports = router;
// });

// module.exports = router;










const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const { submitRequest, getUserRequests, getAllRequests } = require('../controllers/requestController');
const { protect } = require('../middleware/authMiddleware');


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ error: 'User not found' });

    // Check if role is admin
    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied: Not an admin' });
    }

    // Compare password (in real use, use bcrypt)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findOne({ prn: req.user.prn });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      name: user.name,
      email: user.email,
      department: user.department,
      prn: user.prn
      
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});






// Route to submit a new request
router.post('/', protect, submitRequest);

// Route to get requests of the currently logged-in user
router.get('/my-requests', protect, getUserRequests);

// Route to get all requests (admin or staff)
router.get('/all-requests', protect, getAllRequests);

module.exports = router;
