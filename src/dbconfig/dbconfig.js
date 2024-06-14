import mongoose from 'mongoose';


export async function mongoConnect() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.error('MONGO_URI environment variable is not defined');
    throw new Error('MONGO_URI environment variable is not defined');
  }
  console.log('Connecting to MongoDB with URI:', mongoUri);
  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Error connecting to MongoDB');
  }
}
