import { model, Schema, Model, Document } from "mongoose";

interface IUser extends Document {
  companyName: string;
  email: string;
  hashedPassword: string;
}

const UserSchema: Schema = new Schema<IUser>(
  {
    companyName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
  },
  { collection: "users" }
);

const User: Model<IUser> = model("User", UserSchema);

export default User;
