import { useState } from "react";
import { IoSearch, IoLocationOutline } from "react-icons/io5";

const JobsPage = () => {
  const [jobType, setJobType] = useState("");

  return (
    <div className="px-6 py-12 md:px-16">

      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">
          Find Your Next Opportunity
        </h1>

        <p className="text-gray-500 mt-3">
          Discover jobs that match your skills and ambitions.
        </p>
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3 mb-12">

        <div className="flex items-center gap-2 border rounded-lg px-4 py-3 flex-1">
          <IoSearch className="text-gray-400" size={20} />

          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full outline-none"
          />
        </div>

        <div className="flex items-center gap-2 border rounded-lg px-4 py-3 flex-1">
          <IoLocationOutline className="text-gray-400" size={20} />

          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none"
          />
        </div>

        <button
          className="bg-blue-500 text-white px-7 py-3 rounded-lg cursor-default hover:bg-blue-600 hover:cursor-pointer"
        >
          Search Jobs
        </button>

      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Filters */}
        <aside className="border rounded-xl p-5 h-fit">

          <h2 className="text-xl font-bold mb-5">
            Filters
          </h2>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Job Type</h3>

            {["Full-time", "Part-time", "Internship", "Remote"].map((type) => (
              <label key={type} className="flex items-center gap-2 mb-3 text-gray-600">
                <input
                  type="radio"
                  name="jobType"
                  value={type}
                  checked={jobType === type}
                  onChange={(e) => setJobType(e.target.value)}
                  className="accent-blue-600 cursor-pointer"
                />

                {type}
              </label>
            ))}
          </div>

          <button
            onClick={() => setJobType("")}
            className="text-blue-600 hover:underline text-sm"
          >
            Clear filters
          </button>

        </aside>

        {/* Job Listings */}
        <section className="md:col-span-3">

          <div className="mb-5">
            <h2 className="text-2xl font-bold">
              Available Jobs
            </h2>

            <p className="text-gray-500 mt-1">
              Explore opportunities from different companies.
            </p>
          </div>

          

          <div className="rounded-xl border border-dashed p-12 text-center">
            <IoSearch size={35} className="mx-auto text-gray-400" />

            <h3 className="text-lg font-semibold mt-3">
              No jobs available yet
            </h3>

            <p className="text-gray-500 mt-2">
              Job listings will appear here once recruiters post jobs.
            </p>
          </div>

        </section>

      </div>

    </div>
  );
};

export default JobsPage;