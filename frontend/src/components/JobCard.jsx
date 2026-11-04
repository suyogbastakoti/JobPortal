
import { IoBag, IoLocationOutline } from "react-icons/io5";
import { FaBriefcase, FaClock } from "react-icons/fa";

const JobCard = ({ title, company, location, type, salary }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">

      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-500 mt-1">{company}</p>
        </div>

        <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
          <IoBag size={22} />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-5 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <IoLocationOutline size={18} />
          {location}
        </span>

        <span className="flex items-center gap-1">
          <FaBriefcase />
          {type}
        </span>

        <span className="flex items-center gap-1">
          <FaClock />
          Recently posted
        </span>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t">
        <p className="font-semibold text-blue-600">{salary}</p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          View Details
        </button>
      </div>

    </div>
  );
};

export default JobCard;