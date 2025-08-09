// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// const generateToken = (id) =>
//   jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });

// exports.registerUser = async (req, res) => {
//   const { name, email, prn, password } = req.body;
//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(400).json({ message: 'User already exists' });

//     const user = await User.create({ name, email, prn, password });
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       prn: user.prn,
//       token: generateToken(user._id),
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (user && (await user.matchPassword(password))) {
//       res.json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         prn: user.prn,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };



// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// exports.login = async (req, res) => {
//   const { prn } = req.body;
//   if (!prn) return res.status(400).json({ message: 'PRN is required' });

//   try {
//     const user = await User.findOne({ prn });
//     if (!user) return res.status(401).json({ message: 'PRN not found' });

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id, prn: user.prn }, JWT_SECRET, { expiresIn: '1d' });

//     res.json({
//       token,
//       users: {
//         id: user._id,
//         prn: user.prn,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };


// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// exports.login = async (req, res) => {
//   const { prn } = req.body;

//   if (!prn) return res.status(400).json({ message: 'PRN is required' });

//   try {
//     // const user = await User.findOne({ prn });
//     const user = await User.findOne({ prn: new RegExp(`^${prn}$`, 'i') });
//     if (!user) return res.status(401).json({ message: 'PRN not found' });

//     const token = jwt.sign({ id: user._id, prn: user.prn }, JWT_SECRET, {
//       expiresIn: '1d',
//     });

//     res.json({
//       token,
//       user: { id: user._id, prn: user.prn, name: user.name, email: user.email },
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// exports.login = async (req, res) => {
//   let { prn } = req.body;

//   if (!prn) return res.status(400).json({ message: 'PRN is required' });

//   prn = prn.trim().toLowerCase(); // normalize input PRN

//   console.log('Login request with normalized PRN:', prn);

//   try {
//     // Find user with exact lowercase PRN match
//     const user = await User.findOne({ prn });

//     console.log('Matched user:', user);

//     if (!user) return res.status(401).json({ message: 'PRN not found' });

//     const token = jwt.sign({ id: user._id, prn: user.prn }, JWT_SECRET, {
//       expiresIn: '1d',
//     });

//     res.json({
//       token,
//       user: { id: user._id, prn: user.prn, name: user.name, email: user.email },
//     });
//   } catch (err) {
//     console.error('Login error:', err.message);
//     res.status(500).json({ message: 'Server error' });
//   }
// };



// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// exports.login = async (req, res) => {
//   const { prn } = req.body;

//   if (!prn) return res.status(400).json({ message: 'PRN is required' });

//   try {
//     console.log('Login request with PRN:', prn);

//     // Use case-insensitive exact match regex here:
//     const user = await User.findOne({ prn: new RegExp(`^${prn}$`, 'i') });

//     console.log('Matched user:', user);

//     if (!user) return res.status(401).json({ message: 'PRN not found' });

//     const token = jwt.sign({ id: user._id, prn: user.prn }, JWT_SECRET, {
//       expiresIn: '1d',
//     });

//     res.json({
//       token,
//       user: { id: user._id, prn: user.prn, name: user.name, email: user.email },
//     });
//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };








// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// exports.login = async (req, res) => {
//   const { prn } = req.body;

//   if (!prn) return res.status(400).json({ message: 'PRN is required' });

//   try {
//     console.log('Login request with PRN:', prn);

//     // Case-insensitive exact match regex for PRN
//     const user = await User.findOne({ prn: new RegExp(`^${prn}$`, 'i') });

//     console.log('Matched user:', user);

//     if (!user) return res.status(401).json({ message: 'PRN not found' });

//     const token = jwt.sign({ id: user._id, prn: user.prn }, JWT_SECRET, {
//       expiresIn: '1d',
//     });

//     res.json({
//       token,
//       user: { id: user._id, prn: user.prn, name: user.name, email: user.email },
//     });
//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };






// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// exports.login = async (req, res) => {
// const { prn } = req.body;

// if (!prn) return res.status(400).json({ message: 'PRN is required' });

// try {
// console.log('Login request with PRN:', prn);

// // Case-insensitive exact match regex for PRN
// const user = await User.findOne({ prn: new RegExp(`^${prn}$`, 'i') });

// console.log('Matched user:', user);

// if (!user) return res.status(401).json({ message: 'PRN not found' });

// const token = jwt.sign({ id: user._id, prn: user.prn }, JWT_SECRET, {
// expiresIn: '1d',
// });

// res.json({
// token,
// user: { id: user._id, prn: user.prn, name: user.name, email: user.email },
// });
// } catch (err) {
// console.error('Login error:', err);
// res.status(500).json({ message: 'Server error' });
//  }
// };




// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// exports.login = async (req, res) => {
//   const { prn } = req.body;

//   try {
//     const user = await User.findOne({ prn });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const token = jwt.sign(
//       { id: user._id, name: user.name, email: user.email, prn: user.prn },
//       JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.json({
//       user: {
//         name: user.name,
//         email: user.email,
//         prn: user.prn,
//       },
//       token,
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Login failed" });
//   }
// };


// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// exports.login = async (req, res) => {
//   console.log('Login request body:', req.body);

//   const { prn } = req.body;

//   if (!prn) {
//     return res.status(400).json({ message: 'PRN is required' });
//   }

//   try {
//     const user = await User.findOne({ prn });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const token = jwt.sign(
//       { id: user._id, name: user.name, email: user.email, prn: user.prn },
//       JWT_SECRET,
//       { expiresIn: '7d' }
//     );

//     res.json({
//       user: {
//         name: user.name,
//         email: user.email,
//         prn: user.prn,
//       },
//       token,
//     });
//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).json({ message: 'Login failed due to server error' });
//   }
// };












// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// exports.login = async (req, res) => {
//   console.log('Login request body:', req.body);

//   const { prn } = req.body;

//   if (!prn) {
//     return res.status(400).json({ message: 'PRN is required' });
//   }

//   try {
//     const user = await User.findOne({ prn });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const token = jwt.sign(
//       {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         prn: user.prn,
//         role: user.role
//       },
//       JWT_SECRET,
//       { expiresIn: '7d' }
//     );

//     res.json({
//       user: {
//         name: user.name,
//         email: user.email,
//         prn: user.prn,
//         role: user.role
//       },
//       token,
//     });
//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).json({ message: 'Login failed due to server error' });
//   }
// };




const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

// 1️⃣ Admin Login using email
exports.adminLogin = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Not an admin.' });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      user: {
        name: user.name,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    console.error('Admin login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// 2️⃣ Client Login using PRN
exports.clientLogin = async (req, res) => {
  const { prn } = req.body;

  if (!prn) {
    return res.status(400).json({ message: 'PRN is required' });
  }

  try {
    const user = await User.findOne({ prn });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email, prn: user.prn, department: user.department, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      user: {
        name: user.name,
        email: user.email,
        prn: user.prn,
        department:user.department,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    console.error('Client login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
