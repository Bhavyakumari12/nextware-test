import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ email, password });
      localStorage.setItem("email", email);
      navigate("/verify-otp");
    } catch (err) {
      navigate("/error", err);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white shadow-2xl rounded-2xl px-10 py-12 w-full sm:w-96 max-w-sm transition duration-300">
        <form onSubmit={handleLogin}>
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
            Welcome Back
          </h2>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm text-gray-600 mb-2 font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm text-gray-600 mb-2 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Login
          </button>

          <p
            className="text-sm text-center mt-6 text-blue-600 hover:text-blue-800 cursor-pointer transition"
            onClick={() => navigate("/register")}
          >
            Don’t have an account? <span className="font-medium">Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
}
