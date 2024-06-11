import mongoose from 'mongoose';

export async function mongoConnect() {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000, 
    connectTimeoutMS: 10000, 
  };

  try {
    await mongoose.connect(process.env.MONGO_URL, options);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
