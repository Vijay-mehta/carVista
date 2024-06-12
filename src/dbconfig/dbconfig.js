import mongoose from 'mongoose';

export async function mongoConnect() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error('MONGO_URI environment variable is not defined');
    throw new Error('MONGO_URI environment variable is not defined');
  }

  console.log('Connecting to MongoDB with URI:', mongoUri);

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 10000,
  };

  try {
    await mongoose.connect(mongoUri, options);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Example usage in an API route
export async function handler(req, res) {
  await mongoConnect();
  // Your logic here
}
