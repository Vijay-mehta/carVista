import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  make: { type: String, required: [true, "this is required"] },
  model: { type: String, required: [true, "this is required"] },
  year: { type: Number, required: [true, "this is required"] },  
  color: { type: String, required: [true, "this is required"] },
  mileage: { type: Number, required: [true, "this is required"] },
  price: { type: Number, required: [true, "this is required"] }, 
  fuelType: { type: String, required: [true, "this is required"] },
  transmission: { type: String, required: [true, "this is required"] },
  engine: { type: String, required: [true, "this is required"] },
  horsepower: { type: Number, required: [true, "this is required"] },
  features: { type: [String], required: [true, "this is required"] },
  owners: { type: Number, required: [true, "this is required"] },
  image: { type: [String], required: [true, "this is required"] },
});

const Car = mongoose.model('Cars', carSchema);  
export default Car;
