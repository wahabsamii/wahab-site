import React, { useState } from "react";
import SubHero from "../components/SubHero";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import loginBg from "../assets/login.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate()
  const handleSignUp = async (e) => {
    e.preventDefault(); // prevent page refresh

    if (!name || !email || !password) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("https://wahab-me-backend.vercel.app/api/auth/register", {
        name,
        email,
        password,
      });

      if (response.status === 201 || response.data?.status === 201) {
        toast.success("Your account has been created!");
        setname("");
        setemail("");
        setpassword("");
      } else {
        toast.error(response.data?.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create an account"
      );
    }
  };

  return (
    <>
      <SubHero title={"Sign Up"} />
      <div className="min-h-screen flex items-center justify-center bg-[#f5eefd] px-4 py-10">
        <div className="bg-white flex w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg">
          {/* Left Side (Form) */}
          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-3xl font-semibold text-center mb-2">Sign Up</h2>
            <p className="text-center text-gray-500 mb-8 text-sm">
              Welcome! Create your account
            </p>

            <form onSubmit={handleSignUp}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                onChange={(e) => setname(e.target.value)}
                value={name}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#ff014db3]"
                placeholder="Enter your name"
              />

              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#ff014db3]"
                placeholder="Enter your email"
              />

              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  type={showPass ? "text" : "password"}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-[#ff014db3]"
                  placeholder="Enter your password"
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                >
                  {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>

              <div className="mb-6 text-sm text-right">
                <a href="#" className="text-[#FF014F] hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF014F] text-white py-2 rounded-md hover:bg-[#ff014db3] transition"
              >
                Sign up
              </button>
            </form>

            <div className="my-6 flex items-center justify-between">
              <hr className="w-1/4 border-gray-300" />
              <span className="text-gray-400 text-sm">Or Continue With</span>
              <hr className="w-1/4 border-gray-300" />
            </div>

            <div className="flex gap-4 justify-center">
              <button className="flex items-center px-4 py-2 border rounded-md text-sm hover:bg-gray-100">
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  alt="Google"
                  className="mr-2"
                />
                Google
              </button>
              <button className="flex items-center px-4 py-2 border rounded-md text-sm hover:bg-gray-100">
                <img
                  src="https://img.icons8.com/fluency/16/facebook-new.png"
                  alt="Facebook"
                  className="mr-2"
                />
                Facebook
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a onClick={() => navigate('/login')} href="#" className="text-[#FF014F] hover:underline">
                Sign in
              </a>
            </p>
          </div>

          {/* Right Side (Image) */}
          <div
            className="hidden md:block md:w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${loginBg})` }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Signup;
