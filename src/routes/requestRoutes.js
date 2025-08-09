// const express = require('express');
// const { protect } = require('../middleware/authMiddleware');
// const {
//   createRequest,
//   getUserRequests,
// } = require('../controllers/requestController');

// const router = express.Router();

// router.route('/')
//   .post(protect, createRequest)
//   .get(protect, getUserRequests);

// module.exports = router;



// const express = require('express');
// const { protect } = require('../middleware/authMiddleware');
// const { createRequest, getUserRequests } = require('../controllers/requestController');

// const router = express.Router();

// router.route('/')
//   .post(protect, createRequest)
//   .get(protect, getUserRequests);

// module.exports = router;


// const express = require('express');
// const { protect } = require('../middleware/authMiddleware');
// const { createRequest, getUserRequests } = require('../controllers/requestController');

// const router = express.Router();

// router.route('/')
//   .post(protect, createRequest)
//   .get(protect, getUserRequests);

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const { submitRequest } = require("../controllers/requestController");

// router.post("/", submitRequest);

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const { submitRequest } = require("../controllers/requestController");

// router.post("/", submitRequest);

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const { submitRequest } = require("../controllers/requestController");

// router.post("/", submitRequest); // Handles POST /api/article-requests

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const { submitRequest } = require("../controllers/articleRequestController");

// router.post("/", submitRequest);

// module.exports = router;


//routes/requestRoutes.js
// const express = require('express');
// const router = express.Router();
// const authMiddleware = require('../middleware/authMiddleware');
// const { submitRequest } = require('../controllers/requestController');

// router.post('/', authMiddleware, submitRequest);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { submitRequest } = require('../controllers/requestController');

// router.post('/', submitRequest);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { submitRequest } = require('../controllers/requestController');
// const { protect } = require('../middleware/authMiddleware');

// // Correct: `protect` and `submitRequest` are both functions
// router.post('/', protect, submitRequest);

// module.exports = router;




const express = require('express');
const router = express.Router();
//const { submitRequest, getUserRequests } = require('../controllers/requestController');
const { submitRequest, getUserRequests, getAllRequests } = require('../controllers/requestController');
const { protect } = require('../middleware/authMiddleware');

// Submit a new article request
router.post('/', protect, submitRequest);

// 🔽 New route to fetch requests for logged-in user
router.get('/my-requests', protect, getUserRequests);
router.get('/all-requests', protect, getAllRequests); 
//router.get('/admin/request', getAllRequests);

module.exports = router;
