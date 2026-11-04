
import { useParams, Link } from "react-router-dom";
import {
  IoLocationOutline,
  IoBriefcaseOutline,
  IoCashOutline,
  IoBusinessOutline,
  IoArrowBack,
} from "react-icons/io5";

const JobDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10 md:px-16">

      {/* Back Button */}
      <Link
        to="/jobs"
        className="flex items-center gap-2 text-blue-600 mb-8 hover:underline"
      >
        <IoArrowBack />
        Back to Jobs
      </Link>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">

          {/* Job Header */}
          <div className="bg-white border rounded-xl p-7">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-xl">
                <IoBusinessOutline size={30} />
              </div>

              <div>
                <h1 className="text-2xl font-bold">
                  Job Title
                </h1>
                <p className="text-gray-500 mt-1">
                  Company Name
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-7 text-gray-500 text-sm">
              <span className="flex items-center gap-2">
                <IoLocationOutline /> Location
              </span>

              <span className="flex items-center gap-2">
                <IoBriefcaseOutline /> Job Type
              </span>

              <span className="flex items-center gap-2">
                <IoCashOutline /> Salary
              </span>
            </div>
          </div>

          {/* Job Description */}
          <div className="bg-white border rounded-xl p-7">
            <h2 className="text-xl font-bold mb-4">
              Job Description
            </h2>
            <p className="text-gray-600 leading-7">
              The job description will appear here once the
              job information is connected to the backend.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="bg-white border rounded-xl p-7">
            <h2 className="text-xl font-bold mb-4">
              Responsibilities
            </h2>
            <p className="text-gray-500">
              Responsibilities will be displayed here.
            </p>
          </div>

          {/* Requirements */}
          <div className="bg-white border rounded-xl p-7">
            <h2 className="text-xl font-bold mb-4">
              Requirements
            </h2>
            <p className="text-gray-500">
              Job requirements will be displayed here.
            </p>
          </div>

        </div>

        {/* Right Sidebar */}
        <aside className="space-y-6">

          <div className="bg-white border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">
              Apply for this Job
            </h2>

            <button
              disabled
              className="w-full bg-blue-500 text-white py-3 rounded-lg opacity-60 cursor-not-allowed"
            >
              Apply Now
            </button>

            <p className="text-xs text-gray-400 mt-3 text-center">
              Applications will be enabled later.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-3">
              About the Company
            </h2>
            <p className="text-gray-500 text-sm leading-6">
              Company information will appear here.
            </p>
          </div>

        </aside>

      </div>

      {/* Temporary Job ID */}
      <p className="text-xs text-gray-400 mt-8">
        Job ID: {id}
      </p>

    </div>
  );
};

export default JobDetailsPage;