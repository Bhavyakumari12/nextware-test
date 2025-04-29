import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../services/api";

export default function OTPVerify() {
  const [otp, setOtp] = useState("");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await verifyOtp({ email, otp });
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/thank-you");
    } catch (err) {
      navigate("/error",err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
    <form
      onSubmit={handleSubmit}
      className="bg-white w-full max-w-md p-10 rounded-2xl shadow-2xl transition duration-300"
    >
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        Enter OTP
      </h2>
  
      <input
        type="text"
        maxLength="6"
        placeholder="Enter 6-digit OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 text-lg tracking-widest text-center mb-6"
        required
      />
  
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
      >
        Verify
      </button>
    </form>
  </div>
  
  );
}
