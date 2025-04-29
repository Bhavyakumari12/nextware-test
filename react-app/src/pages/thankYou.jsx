import { useNavigate } from "react-router-dom";
import { deleteAccount } from "../services/api";

export default function ThankYou() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteAccount(user.data.email);
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
    <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
      Welcome, {user.data.name}!
    </h1>
  
    <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 transition duration-300">
      <p className="text-lg text-gray-800 mb-2">
        <strong className="text-gray-600">Email:</strong> {user.data.email}
      </p>
      <p className="text-lg text-gray-800 mb-2">
        <strong className="text-gray-600">Age:</strong> {user.data.age}
      </p>
      <p className="text-lg text-gray-800">
        <strong className="text-gray-600">Date of Birth:</strong>{" "}
        {new Date(user.data.dob).toLocaleDateString()}
      </p>
  
      <button
        onClick={handleDelete}
        className="mt-8 w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition duration-300"
      >
        Remove Account
      </button>
    </div>
  </div>
  );
}
