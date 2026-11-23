import { useParams, Link } from "react-router-dom";
import {
  IoLocationOutline,
  IoBriefcaseOutline,
  IoCashOutline,
  IoBusinessOutline,
  IoArrowBack,
} from "react-icons/io5";

import jobs from "../data/Jobs";

const JobDetailsPage = () => {
  const { id } = useParams();

  // Find the job matching the ID in the URL
  const job = jobs.find((item) => item.id === id);

  // Handle invalid job IDs
  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800">
          Job Not Found
        </h1>

        <p className="text-gray-500 mt-2">
          The job you are looking for does not exist.
        </p>

        <Link
          to="/jobs"
          className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Back to Jobs
        </Link>
      </div>
    );
  }

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
                <h1 className="text-2xl font-bold text-gray-800">
                  {job.title}
                </h1>

                <p className="text-gray-500 mt-1">
                  {job.company}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-7 text-gray-500 text-sm">
              <span className="flex items-center gap-2">
                <IoLocationOutline />
                {job.location}
              </span>

              <span className="flex items-center gap-2">
                <IoBriefcaseOutline />
                {job.type}
              </span>

              <span className="flex items-center gap-2">
                <IoCashOutline />
                {job.salary}
              </span>
            </div>
          </div>

          {/* Job Description */}
          <div className="bg-white border rounded-xl p-7">
            <h2 className="text-xl font-bold mb-4">
              Job Description
            </h2>

            <p className="text-gray-600 leading-7">
              {job.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="bg-white border rounded-xl p-7">
            <h2 className="text-xl font-bold mb-4">
              Responsibilities
            </h2>

            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-white border rounded-xl p-7">
            <h2 className="text-xl font-bold mb-4">
              Requirements
            </h2>

            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Required Skills */}
          <div className="bg-white border rounded-xl p-7">
            <h2 className="text-xl font-bold mb-4">
              Required Skills
            </h2>

            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
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

          {/* Company Information */}
          <div className="bg-white border rounded-xl p-6">
            <h2 className="text-lg font-bold mb-3">
              About the Company
            </h2>

            <p className="text-gray-500 text-sm leading-6">
              {job.aboutCompany}
            </p>
          </div>

        </aside>

      </div>

      <p className="text-xs text-gray-400 mt-8">
        Job ID: {job.id}
      </p>

    </div>
  );
};

export default JobDetailsPage;