import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    unique: [true, "Ene bol  zuwhun minii ner"],
    required: [true, "firstName not found"],
    minlength: [2, "1 usegtei ner gj haa bsin"],
    maxlength: [50, "arai2 ymar urt nertei ym"],
  },
  gender: {
    type: String,
    enum: {
      values: ["Male", "Female", "None"],
      message: "Gender not found",
    },
  },
  lastname: String,
  age: Number,
  hobbies: Array,
  image: String,
});

UserSchema.path("lastname").validate((lastname) => {
  return !/[0-9]/.test(lastname);
}, "Neren dund too tsohij ywna hahah");

UserSchema.path("firstname").validate((firstname) => {
  return !/[0-9]/.test(firstname);
}, "first name-d too oroh ysgui");

//email validate nemeh

const User = mongoose.model("User", UserSchema);

export default User;
