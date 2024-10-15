import mongoose from "mongoose";

let userSchema = mongoose.Schema({
  name : {
    type : String,
    requied : true,
  },
  email : String,
},{timestamps:true})

let userModel = mongoose.model('User',userSchema);

export default userModel;