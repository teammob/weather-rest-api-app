import mongoose from 'mongoose';
/*
* Base DB connection on MongoDB Atlas
*/
export default mongoose.connect(process.env.DB_URL, {
  dbName: process.env.DB_NAME,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
