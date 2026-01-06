import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    phone: { type: String },
    email: { type: String },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 300 }, // Expires in 5 minutes (300 seconds)
});

export default mongoose.model("Otp", otpSchema);
