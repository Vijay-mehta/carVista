import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: [true,"name is required"],
  },
  email:{
    type:String,
    required:[true,"email is required"]
  },
  password:{
    type:String,
    require:[true,"password is required"]
  },
  userprofile:{
    type:String,
    require:[true,"userProfile is required"]
  }
});

 const User = mongoose.model('User',userSchema)

 export default User;