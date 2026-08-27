const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.includes('<db_password>')) {
    console.error(`====================================================`);
    console.error(`❌ [MongoDB Atlas Configuration Required]`);
    console.error(`----------------------------------------------------`);
    console.error(`Please replace '<db_password>' in 'backend/.env' with your actual MongoDB Atlas password.`);
    console.error(`Example: MONGODB_URI=mongodb+srv://TaxGenie:YourPassword123@cluster0.4lmsmye.mongodb.net/poultrymart?retryWrites=true&w=majority`);
    console.error(`====================================================`);
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`====================================================`);
    console.log(`☁️ [MongoDB Atlas] Connected successfully to cluster: ${conn.connection.host} / ${conn.connection.name}`);
    console.log(`====================================================`);
  } catch (error) {
    console.error(`====================================================`);
    console.error(`❌ [MongoDB Atlas Connection Failed]: ${error.message}`);
    console.error(`----------------------------------------------------`);
    console.error(`💡 FIX: Allow Access in MongoDB Atlas Network Access:`);
    console.error(`1. Log in to https://cloud.mongodb.com`);
    console.error(`2. Click 'Network Access' under Security in the left sidebar`);
    console.error(`3. Click '+ Add IP Address' -> Select 'ALLOW ACCESS FROM ANYWHERE' (0.0.0.0/0)`);
    console.error(`4. Click 'Confirm' and restart server.`);
    console.error(`====================================================`);
    process.exit(1);
  }
};

module.exports = connectDB;
