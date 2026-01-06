import axios from "axios";
import toast from "react-hot-toast";

export const sendOTP = async (phone) => {
  try {
    const { data } = await axios.post("/api/user/send-otp", { phone });
    if (data.success) {
      toast.success(data.message);
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    throw error;
  }
};
