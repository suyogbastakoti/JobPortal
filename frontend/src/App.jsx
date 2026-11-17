import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import JobSeekerDashboard from "./pages/JobSeekerDashboard";
import MyApplications from "./pages/MyApplications";
import JobseekerProfile from "./pages/JobseekerProfile";
import JobseekerCV from "./pages/JobseekerCV";
import MatchMyCV from "./pages/MatchMyCV";

const App = () => {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/jobseeker/dashboard" element={<JobSeekerDashboard />} />
        <Route path="/jobseeker/applications" element={<MyApplications />} />
        <Route path="/jobseeker/profile" element={<JobseekerProfile />} />
        <Route path="/jobseeker/cv" element={<JobseekerCV />} />
        <Route path="/jobseeker/match-cv" element={<MatchMyCV />} />
      </Routes>
    </>
  );
};

export default App;