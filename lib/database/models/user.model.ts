import { model, models, Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new Schema({
  clerkId: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true, unique: true },
  fristName: { type: String, require: true },
  lastName: { type: String, require: true },
  photo: { type: String, require: true },
});

const User = models.User || model("User", UserSchema);
export default User;
