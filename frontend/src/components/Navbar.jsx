
const Navbar = () => {
  return (
    <div className=" flex justify-between items-center px-7 py-3 border-b">
      <div className="text-2xl font-bold text-blue-600">
        SmartHire Hub
      </div>

      <div className="flex gap-2 underline text-gray-700">
        <a href="#">Find Jobs</a>
        <a href="#">Companies</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white hover:cursor-pointer px-2 py-2 rounded-xl shadow border">
            Login
        </button>

        <button className="bg-blue-500 hover:bg-blue-600 text-white hover:cursor-pointer px-2 py-2 rounded-xl shadow border">
            Sign Up
        </button>
      </div>

    </div>
  );
};

export default Navbar;
