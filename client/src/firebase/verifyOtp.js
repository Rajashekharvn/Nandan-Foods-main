import axios from "axios";

/**
 * Verify OTP using Custom Backend API
 * @param {string} phone - User phone number
 * @param {string} otp - 6 digit OTP entered by user
 * @returns {object} Backend response { success, user, message }
 */
export const verifyOTP = async (phone, otp) => {
  if (!otp) {
    throw new Error("OTP is required");
  }

  try {
    const { data } = await axios.post("/api/user/verify-otp", { phone, otp });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "OTP verification failed");
  }
};
