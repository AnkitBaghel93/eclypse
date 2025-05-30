const mongoose = require('mongoose');

const conn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error(" Database connection failed:", error.message);
    process.exit(1); // Stop the server if DB connection fails
  }
};

module.exports = conn;
