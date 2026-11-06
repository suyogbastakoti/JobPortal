
import JobseekerSidebar from "../components/JobseekerSidebar";

const JobSeekerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <JobseekerSidebar />

      {/* Main Dashboard Content */}
      <main className="flex-1 p-6 md:p-10">

        <h1 className="text-2xl font-bold text-gray-900">
          Welcome to Your Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your job search and applications.
        </p>

      </main>

    </div>
  );
};

export default JobSeekerDashboard;