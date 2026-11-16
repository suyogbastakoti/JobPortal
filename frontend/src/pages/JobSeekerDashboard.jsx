import { Link } from "react-router-dom";

import {
  IoDocumentTextOutline,
  IoTimeOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";

import JobseekerSidebar from "../components/JobseekerSidebar";



const JobSeekerDashboard = () => {
  const overviewCards = [
    {
      title: "Total Applications",
      value: 24,
      icon: IoDocumentTextOutline,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Pending Applications",
      value: 12,
      icon: IoTimeOutline,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Shortlisted",
      value: 8,
      icon: IoCheckmarkCircleOutline,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Rejected",
      value: 4,
      icon: IoCloseCircleOutline,
      color: "bg-red-100 text-red-600",
    },

  ];

  const recommendedJobs = [
  {
    id: 1,
    title: "Full Stack MERN Developer",
    company: "Tech Solutions",
    location: "Kathmandu",
    type: "Full-time",
    salary: "NPR 25,000 - 40,000",
  },
  {
    id: 2,
    title: "React Frontend Developer",
    company: "Digital Nepal",
    location: "Lalitpur",
    type: "Internship",
    salary: "NPR 15,000 - 20,000",
  },
  {
    id: 3,
    title: "Junior Backend Developer",
    company: "Code Studio",
    location: "Kathmandu",
    type: "Full-time",
    salary: "Negotiable",
  },
];

  // Temporary Recent Applications Data
  const recentApplications = [
    {
      id: 1,
      jobTitle: "Frontend Developer",
      company: "Tech Solutions",
      appliedDate: "Nov 12, 2026",
      status: "Pending",
      statusStyle: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 2,
      jobTitle: "MERN Stack Developer",
      company: "Digital Nepal",
      appliedDate: "Nov 10, 2026",
      status: "Shortlisted",
      statusStyle: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      jobTitle: "React Developer",
      company: "Code Studio",
      appliedDate: "Nov 08, 2026",
      status: "Rejected",
      statusStyle: "bg-red-100 text-red-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">

      {/* Sidebar */}
      <JobseekerSidebar />

      {/* Main Dashboard Content */}
      <main className="flex-1 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome to Your Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your job search and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {overviewCards.map((card, index)=>{
            const Icon = card.icon;

            return(
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {card.title}
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-3">
                    {card.value}
                  </h2>
                </div>

                <div className={`p-3 rounded-xl ${card.color}`}>
                  <Icon size={25} />
                </div>

              </div>
            )
          })}
        </div>

        {/* Recent Applications */}
<div className="mt-10 bg-white rounded-xl border border-gray-100 shadow-sm">

  <div className="p-6 border-b border-gray-100">
    <h2 className="text-lg font-semibold text-gray-900">
      Recent Applications
    </h2>

    <p className="text-sm text-gray-500 mt-1">
      Track the latest jobs you have applied for.
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

        {recentApplications.map((application) => (
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
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${application.statusStyle}`}>
                {application.status}
              </span>
            </td>

          </tr>
        ))}

      </tbody>

    </table>
  </div>

</div>


{/* Recommended Jobs */}
<section className="mt-10">

  <div className="flex items-center justify-between mb-6">
    <div>
      <h2 className="text-xl font-bold text-gray-900">
        Recommended Jobs
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Explore opportunities that match your interests.
      </p>
    </div>

    <Link
      to="/jobs"
      className="text-blue-600 text-sm font-semibold hover:underline"
    >
      View All Jobs
    </Link>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

    {recommendedJobs.map((job) => (
      <div
        key={job.id}
        className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
      >

        <h3 className="text-lg font-semibold text-gray-900">
          {job.title}
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          {job.company}
        </p>

        <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-500">
          <span>{job.location}</span>
          <span>{job.type}</span>
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">

          <span className="text-sm font-semibold text-gray-800">
            {job.salary}
          </span>

          <Link
            to={`/jobs/${job.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            View Details
          </Link>

        </div>

      </div>
    ))}

  </div>

</section>

</main>

</div>
  );
};

export default JobSeekerDashboard;