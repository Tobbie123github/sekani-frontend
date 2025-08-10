import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import { useAuth } from '../context/AuthContext';


export default function Login() {
  const navigate = useNavigate(); 
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://sekani-backend.onrender.com/api/auth/login",
        { email, password }
      );

      setLoading(false);
      setMessage("Login successful!");
      localStorage.setItem("token", res.data.token);

     login(res.data.token, res.data.user); 
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      if (err.response?.data?.msg) {
        setMessage(err.response.data.msg);
      } else {
        setMessage("Server error. Try again later.");
      }
    }
  };

  return (
    <>
      {loading && <Loading />}

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#AF4C0F]">
            Login
          </h2>

          {message && (
            <p
              className={`text-center mb-4 px-4 py-2 rounded text-white ${
                message.toLowerCase().includes("successful")
                  ? "bg-green-500 text-green-100"
                  : "bg-red-500 text-red-100"
              }`}
            >
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
