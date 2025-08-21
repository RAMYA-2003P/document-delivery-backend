// const jwt = require('jsonwebtoken');
// const env = require('../config/env');
// const User = require('../models/User');

// const protect = async (req, res, next) => {
//   let token;
  
//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     token = req.headers.authorization.split(' ')[1];
//   }

//   if (!token) {
//     return res.status(401).json({ message: 'Not authorized, no token' });
//   }

//   try {
//     const decoded = jwt.verify(token, env.JWT_SECRET);
//     req.user = await User.findById(decoded.id).select('-password');
//     next();
//   } catch (err) {
//     console.error('JWT Error:', err);
//     res.status(401).json({ message: 'Not authorized, token failed' });
//   }
// };

// module.exports = { protect };




// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// exports.protect = async (req, res, next) => {
//   let token;

//   // Check for token in headers Authorization: Bearer <token>
//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     token = req.headers.authorization.split(' ')[1];
//   }

//   if (!token) return res.status(401).json({ message: 'Not authorized, no token' });

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     req.user = await User.findById(decoded.id).select('-password'); // exclude password if any
//     if (!req.user) return res.status(401).json({ message: 'User not found' });
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Not authorized, token failed' });
//   }
//};


// const jwt = require('jsonwebtoken');

// exports.protect = async (req, res, next) => {
//   try {
//     // 1. Get token from header
//     const token = req.headers.authorization?.split(' ')[1];
    
//     // 2. Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
//     // 3. Attach user to request
//     req.user = decoded;
//     next();
    
//   } catch (err) {
//     res.status(401).json({ error: 'Not authorized' });
//   }
// };













// // middleware/authMiddleware.js
// const jwt = require('jsonwebtoken');

// exports.protect = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).json({ error: 'No token provided' });
//     }

//     const token = authHeader.split(' ')[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.user = decoded;
//     next();
//   } catch (err) {
//     console.error("Auth error:", err.message);
//     res.status(401).json({ error: 'Not authorized' });
//   }
// };

// const jwt = require("jsonwebtoken");

// exports.protect = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };




// // // middleware/authMiddleware.js
// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "No token, authorization denied" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // contains user info like id, prn, email
//     next();
//   } catch (err) {
//     res.status(401).json({ error: "Token is not valid" });
//   }
// };

// module.exports = authMiddleware;



// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ error: 'No token, authorization denied' });
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Should contain id, prn, name, email
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: 'Token is not valid' });
//   }
// };

// module.exports = authMiddleware;



const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Auth error:', err);
    res.status(401).json({ message: 'Invalid token' });
  }
};
