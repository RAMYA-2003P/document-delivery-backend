// const express = require('express');
// const router = express.Router();
// const { getAllRequests ,  updateRequestStatus } = require('../controllers/requestController');

// // Public admin route — no auth for now
// router.get('/admin/request', getAllRequests);
// router.put('/admin/request/:id/status', updateRequestStatus);
// router.put('/admin/request/:id/status', async (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;

//   try {
//     const updated = await ArticleRequest.findByIdAndUpdate(id, { status }, { new: true });
//     if (!updated) return res.status(404).json({ message: 'Request not found' });
//     res.json(updated);
//   } catch (err) {
//     console.error('Update error:', err);
//     res.status(500).json({ message: 'Failed to update status' });
//   }
// });
// module.exports = router;


const express = require('express');
const router = express.Router();
const User = require('../models/User');
//const { getAllRequests, updateRequestStatus } = require('../controllers/requestController');
const { getAllRequests, updateRequestStatus, uploadArticleFile, upload } = require('../controllers/requestController');


// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) return res.status(404).json({ error: 'User not found' });

//     // Check if role is admin
//     if (user.role !== 'admin') {
//       return res.status(403).json({ error: 'Access denied: Not an admin' });
//     }

//     // Compare password (in real use, use bcrypt)
//     if (user.password !== password) {
//       return res.status(401).json({ error: 'Incorrect password' });
//     }

//     const token = jwt.sign(
//       { userId: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );

//     res.json({ token });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// Get all article requests

router.get('/admin/request', getAllRequests);

// Update status (admin)
router.put('/admin/request/:id/status', updateRequestStatus);


router.post('/admin/request/:id/upload', upload.single('articleFile'), uploadArticleFile);
//router.post('/admin/request/:id/upload', upload.single('articleFile'), uploadArticleFile);

module.exports = router;
