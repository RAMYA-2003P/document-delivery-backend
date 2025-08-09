// const app = require('./app');
// const env = require('./config/env');

// const PORT = env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
// });


// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
//const requestRoutes = require('./routes/requestRoutes');

// const app = express();

// connectDB();

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
//app.use('/api/requests', requestRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');

// const authRoutes = require('./routes/authRoutes');
// const requestRoutes = require('./routes/requestRoutes');

// const app = express();
// connectDB();

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/requests', requestRoutes);


// // error handling, etc.

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// require('dotenv').config(); // Load env variables BEFORE using them

// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');

// const authRoutes = require('./routes/authRoutes');
// const requestRoutes = require('./routes/requestRoutes');

// const app = express();

// connectDB(); // Connect to DB after env variables are loaded

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/requests', requestRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');

// const authRoutes = require('./routes/authRoutes');

// require('dotenv').config();

// const app = express();
// connectDB();

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





// require('dotenv').config();

// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const { PORT } = require('./config');

// const authRoutes = require('./routes/authRoutes');

// const app = express();

// connectDB();

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');

// const app = express();

// connectDB();

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const cors = require('cors');
// app.use(cors({
//   origin: 'http://localhost:3000', // React app URL
//   credentials: true,
// }));



// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// const authRoutes = require('./routes/authRoutes');
// const articleRequestRoutes = require('./routes/articleRequests');

// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true,
// }));
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/article-requests', requestRoutes);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/db');
// require('dotenv').config();

// const requestRoutes = require('./routes/requestRoutes'); 
// const authRoutes = require('./routes/authRoutes');

// const app = express();

// connectDB();

// app.use(cors());
// app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/article-requests', requestRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const articleRequestRoutes = require('./routes/requestRoutes');

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error(err));

// app.use('/api/article-requests', articleRequestRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });




// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const articleRequestRoutes = require('./routes/requestRoutes');

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error(err));

// app.use('/api/article-requests', articleRequestRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });






















require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const requestRoutes = require('./routes/requestRoutes');
const adminrequestRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/articleRequests');




const app = express();
const PORT = process.env.PORT || 5000;


// Connect to MongoDB before starting server
const startServer = async () => {
  try {
    await connectDB();
    console.log('MongoDB connected successfully');

    // Middleware
    app.use(cors());
    app.use(express.json());

    // Routes
    app.use('/api/auth', authRoutes);
    app.use('/api/article-requests', requestRoutes);
    
    app.use('/api/user', userRoutes);

    //app.use('/api/article-requests', articleRoutes);
    app.use('/api/article-requests', adminrequestRoutes);
    
    app.use('/uploads', express.static('uploads'));


    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();

