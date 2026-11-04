import { Link } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">

      <div className="bg-white border rounded-2xl shadow-sm p-8 w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">
            Login to your SmartHire Hub account
          </p>
        </div>

        <form className="space-y-5">

          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <IoMailOutline className="text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <IoLockClosedOutline className="text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;