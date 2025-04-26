import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import LoginRightSide from "../../../components/loginRightSIde/LoginRightSide";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://level-up-talent-detection.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save token in localStorage (or cookies)
      localStorage.setItem("token", data.token);

      // Redirect or notify success
      toast.success("Login success:", data);
      setTimeout(() => navigate("/participants"), 2000);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <ToastContainer />
      <div className="min-h-screen flex flex-col lg:flex-row">

        <div className="w-full lg:w-1/2 ">
        
        <div className="flex flex-shrink-0 p-4">
            <a href="#" className="text-2xl font-bold text-gray-800">
              LEVEL
            </a>
            <div className="flex items-center">
          <img src="/logo.png" className="h-10"/>
          <a href="#" className="text-2xl font-bold text-gray-800">
          UP
          </a>
        </div>
          </div>

          <div className="flex justify-center items-center">
          <div className="bg-[#FFFFFF] py-8 px-6 rounded-2xl w-[90%] md:w-[60%] font-DMSans">
            <h2 className="text-[#1F2937] text-3xl font-bold mb-4 font-Montserrat">Login</h2>
            {error && <p className="text-red-500 mb-3">{error}</p>}

            <form  className="space-y-2" onSubmit={handleSubmit}>
              <div>
                <label className="text-[#263A43] font-semibold block mb-2">Email</label>
                <input
                id="email"
                name="email"
                type="email"
                placeholder="Type your email address..." 
                className="border border-[#B1B1B1] border-b-4 border-b-gray-600 rounded-lg px-6 py-6 mb-5 text-sm w-full outline-none bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label className="text-[#263A43] font-semibold block mb-2">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Type your password here..."
                    className="w-full px-6 py-6 mb-5 rounded-lg bg-[#FFFFFF] text-[#141519] border border-[#B1B1B1] focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                  <span
                    className="absolute inset-y-0 right-4 bottom-4 flex items-center text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEye className="text-[#292B33] lg:text-xl" /> : <FiEyeOff className="text-[#292B33]  lg:text-xl" />}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-700 hover:bg-gray-600 font-inter text-[#FFFFFF] px-4 py-2 lg:px-6 lg:py-6 rounded-md"
              >
                {loading ? "Logging in..." : "LogIn"}
              </button>
            </form>
          </div>
          </div>
        </div>
        
        <div className="hidden lg:block w-1/2">
          <LoginRightSide />
        </div>
      </div>
    </>
  );
};

export default SignIn;
