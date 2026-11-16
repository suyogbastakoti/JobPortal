import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import JobseekerSidebar from "../components/JobseekerSidebar";

const MyApplications = () => {

  // Temporary application data
  const applications = [
    {
      id: 1,
      jobTitle: "Full Stack MERN Developer",
      company: "Tech Solutions",
      appliedDate: "Nov 12, 2026",
      status: "Pending",
    },
    {
      id: 2,
      jobTitle: "React Frontend Developer",
      company: "Digital Nepal",
      appliedDate: "Nov 10, 2026",
      status: "Shortlisted",
    },
    {
      id: 3,
      jobTitle: "Junior Backend Developer",
      company: "Code Studio",
      appliedDate: "Nov 08, 2026",
      status: "Rejected",
    },
    {
      id: 4,
      jobTitle: "Node.js Developer",
      company: "Cloud Nepal",
      appliedDate: "Nov 06, 2026",
      status: "Pending",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Filter applications
  const filteredApplications = applications.filter((application) => {
    const matchesSearch =
      application.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" ||
      application.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Shortlisted":
        return "bg-green-100 text-green-700";

      case "Rejected":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">

      <JobseekerSidebar />

      <main className="flex-1 min-w-0 p-6 md:p-10">

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            My Applications
          </h1>

          <p className="text-gray-500 mt-2">
            Track and manage all your job applications.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm mb-6">

          <div className="flex flex-col md:flex-row gap-4">

            {/* Search */}
            <div className="relative flex-1">
              <IoSearchOutline
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search by job title or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Applications</option>
              <option value="Pending">Pending</option>
              <option value="Shortlisted">Shortlisted</option>
              <option value="Rejected">Rejected</option>
            </select>

          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">

          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              Application History
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {filteredApplications.length} applications found
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-gray-50 text-gray-500 text-sm">
                <tr>
                  <th className="px-6 py-4 font-medium">Job Title</th>
                  <th className="px-6 py-4 font-medium">Company</th>
                  <th className="px-6 py-4 font-medium">Applied Date</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">

                {filteredApplications.length > 0 ? (
                  filteredApplications.map((application) => (
                    <tr key={application.id}>

                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {application.jobTitle}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {application.company}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500">
                        {application.appliedDate}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(application.status)}`}
                        >
                          {application.status}
                        </span>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center py-10 text-gray-500"
                    >
                      No applications found.
                    </td>
                  </tr>
                )}

              </tbody>

            </table>
          </div>

        </div>

      </main>
    </div>
  );
};

export default MyApplications;