// const mongoose = require('mongoose');
// const User = require('./models/User');

// const run = async () => {
//   await mongoose.connect('mongodb://localhost:27017/your-db-name');

//   // Use the same normalized prn as your login code
//   const prn = 'pes1pg23ca283';

//   const user = await User.findOne({ prn });
//   console.log('User found:', user);

//   await mongoose.disconnect();
// };

// run();


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  prn: { type: String, required: true, unique: true },
  name: String,
  email: String,
});

const User = mongoose.model('User', userSchema, 'students');

const MONGO_URI = 'mongodb://admin:Admin%40123@localhost:27017/ecommercenew?authSource=admin';

async function testFindUser(prn) {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB');

  const normalizedPrn = prn.trim().toLowerCase();

  const user = await User.findOne({ prn: new RegExp(`^${normalizedPrn}$`, 'i') });
  console.log('User found:', user);

  await mongoose.disconnect();
}

testFindUser('pes1pg23ca283').catch(console.error);
