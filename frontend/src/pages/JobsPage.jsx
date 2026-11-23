import { useState } from "react";
import { Link } from "react-router-dom";

import {
  IoSearch,
  IoLocationOutline,
} from "react-icons/io5";

import jobs from "../data/Jobs";

import JobseekerSidebar from "../components/JobseekerSidebar";

const JobsPage = () => {
  const [jobType, setJobType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  // Filter jobs based on search and selected filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation = job.location
      .toLowerCase()
      .includes(location.toLowerCase());

    const matchesType = jobType
      ? job.type === jobType
      : true;

    return matchesSearch && matchesLocation && matchesType;
  });

  // Clear all filters
  const handleClearFilters = () => {
    setJobType("");
    setSearchTerm("");
    setLocation("");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">

      {/* Jobseeker Sidebar */}
      <JobseekerSidebar />

      <main className="flex-1 px-5 py-10 md:px-10">

        {/* Page Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Find Your Next Opportunity
          </h1>

          <p className="text-gray-500 mt-3">
            Discover jobs that match your skills and ambitions.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3 mb-12">

          {/* Job Search */}
          <div className="flex items-center gap-2 border bg-white rounded-lg px-4 py-3 flex-1">
            <IoSearch className="text-gray-400" size={20} />

            <input
              type="text"
              placeholder="Job title or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Location Search */}
          <div className="flex items-center gap-2 border bg-white rounded-lg px-4 py-3 flex-1">
            <IoLocationOutline className="text-gray-400" size={20} />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>

          <button
            onClick={() => {}}
            className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Search Jobs
          </button>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Filters */}
          <aside className="border bg-white rounded-xl p-5 h-fit">

            <h2 className="text-xl font-bold mb-5">
              Filters
            </h2>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">
                Job Type
              </h3>

              {["Full-time", "Part-time", "Internship", "Remote"].map(
                (type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 mb-3 text-gray-600 cursor-pointer"
                  >
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
                )
              )}
            </div>

            <button
              onClick={handleClearFilters}
              className="text-blue-600 hover:underline text-sm"
            >
              Clear filters
            </button>

          </aside>

          {/* Job Listings */}
          <section className="md:col-span-3">

            <div className="mb-5">
              <h2 className="text-2xl font-bold text-gray-800">
                Available Jobs
              </h2>

              <p className="text-gray-500 mt-1">
                {filteredJobs.length} jobs found
              </p>
            </div>

            <div className="space-y-5">

              {filteredJobs.length > 0 ? (

                filteredJobs.map((job) => (

                  <div
                    key={job.id}
                    className="bg-white border rounded-xl p-6 hover:shadow-md transition"
                  >

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                      {/* Job Information */}
                      <div className="flex-1">

                        <h3 className="text-xl font-bold text-gray-800">
                          {job.title}
                        </h3>

                        <p className="text-gray-500 mt-1">
                          {job.company}
                        </p>

                        {/* Job Details */}
                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">

                          <span className="flex items-center gap-1">
                            <IoLocationOutline />
                            {job.location}
                          </span>

                          <span>
                            {job.type}
                          </span>

                          <span>
                            {job.salary}
                          </span>

                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mt-4">

                          {job.skills.map((skill) => (

                            <span
                              key={skill}
                              className="bg-blue-50 text-blue-600 text-xs px-3 py-1.5 rounded-full"
                            >
                              {skill}
                            </span>

                          ))}

                        </div>

                      </div>

                      {/* View Details Button */}
                      <Link
                        to={`/jobs/${job.id}`}
                        className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-center hover:bg-blue-700 transition whitespace-nowrap"
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                ))

              ) : (

                /* Empty State */
                <div className="rounded-xl border border-dashed bg-white p-12 text-center">

                  <IoSearch
                    size={35}
                    className="mx-auto text-gray-400"
                  />

                  <h3 className="text-lg font-semibold mt-3">
                    No jobs found
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Try changing your search or filters.
                  </p>

                  <button
                    onClick={handleClearFilters}
                    className="text-blue-600 hover:underline mt-4 text-sm"
                  >
                    Clear all filters
                  </button>

                </div>

              )}

            </div>

          </section>

        </div>

      </main>
    </div>
  );
};

export default JobsPage;