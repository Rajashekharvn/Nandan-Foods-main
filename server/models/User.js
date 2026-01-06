import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: false,
      sparse: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
    },
    name: {
      type: String,
      default: "",
    },
    cartItems: {
      type: Object,
      default: {},
    },
    password: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    otpHash: String,
    otpExpire: Date,
    otpAttempts: {
      type: Number,
      default: 0
    },
  },
  { minimize: false, timestamps: true }
);

const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;
