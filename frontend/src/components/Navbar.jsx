import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center px-7 py-3 border-b">
      <Link to="/">
        <div className="text-2xl font-bold text-blue-600">
          SmartHire Hub
        </div>
      </Link>
      

      <div className="flex gap-5 text-gray-700">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>

        <Link to="/jobs" className="hover:text-blue-600">
          Find Jobs
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white hover:cursor-pointer px-2 py-2 rounded-xl shadow border">
            <Link to="/login">
              Login
            </Link>
        </button>

        <button className="bg-blue-500 hover:bg-blue-600 text-white hover:cursor-pointer px-2 py-2 rounded-xl shadow border">
            <Link to="/register">
              SignUp
            </Link>
        </button>
      </div>

    </div>
  );
};

export default Navbar;
