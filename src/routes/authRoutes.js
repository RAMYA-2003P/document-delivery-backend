// const express = require('express');
// const { registerUser, loginUser } = require('../controllers/authController');
// const router = express.Router();

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// module.exports = router;


// const express = require('express');
// const { login } = require('../controllers/authController');

// const router = express.Router();

// router.post('/login', login);

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const { login } = require('../controllers/authController');

// router.post('/login', login);

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const authMiddleware = require('../middleware/authMiddleware');
// const { submitRequest } = require('../controllers/requestController');

// // Protect POST route with auth middleware
// router.post('/', authMiddleware, submitRequest);

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// router.post('/login', authController.login);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { adminLogin, clientLogin } = require('../controllers/authController');

// Admin login via email
router.post('/admin-login', adminLogin);

// Client login via PRN
router.post('/login', clientLogin);

module.exports = router;