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

  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <JobseekerSidebar />

      {/* Main Dashboard Content */}
      <main className="flex-1 p-6 md:p-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome to Your Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your job search and applications.
          </p>
        </div>

        <div>
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
        

      </main>

    </div>
  );
};

export default JobSeekerDashboard;