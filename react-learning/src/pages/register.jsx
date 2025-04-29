import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      navigate("/");
    } catch (err) {
      alert("Registration failed.", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="bg-white w-full max-w-2xl p-10 rounded-2xl shadow-2xl transition duration-300"
      >
        <h2 className="text-4xl font-semibold mb-10 text-center text-gray-800">
          Create Account
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {["name", "email", "password", "age", "dob"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                id={field}
                name={field}
                type={
                  field === "password"
                    ? "password"
                    : field === "dob"
                    ? "date"
                    : "text"
                }
                placeholder={field === "dob" ? "MM/DD/YYYY" : `Enter ${field}`}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                onChange={handleChange}
                required
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-10 w-full py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}
