import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  userprofile: {
    type: String,
    // required: [true, "userProfile is required"],
  }
});

const User = mongoose.model('users', userSchema);

export default User;
