const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("MongoDB: Attempting connection...");
    // serverSelectionTimeoutMS: Fail after 5 seconds if connection is blocked (e.g. IP whitelist)
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    // We do NOT exit the process so we can see the error in the logs
    // process.exit(1); 
  }
};

module.exports = connectDB;
