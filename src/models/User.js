// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ['user', 'admin'],
//     default: 'user',
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Hash password before saving
// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// module.exports = mongoose.model('User', UserSchema);

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   prn: { type: String, required: true, unique: true },
//   name: String,
//   email: String,
// });

// module.exports = mongoose.model('User', userSchema);


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   prn: { type: String, required: true, unique: true },
//   name: String,
//   email: String,
// });

// // Pre-save hook to normalize PRN: trim and lowercase
// userSchema.pre('save', function(next) {
//   if (this.prn) {
//     this.prn = this.prn.trim().toLowerCase();
//   }
//   next();
// });

// module.exports = mongoose.model('User', userSchema,);



// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   prn: { type: String, required: true, unique: true },
//   name: String,
//   email: String,
//   role: {
//     type: String,
//     enum: ['user', 'admin'],
//     default: 'user'
//   }
// });

// // Pass third param 'students' to fix collection name
// module.exports = mongoose.model('User', userSchema, 'students');



















const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  prn: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

// Third parameter ensures the collection name is 'students'
module.exports = mongoose.model('User', userSchema, 'students');
