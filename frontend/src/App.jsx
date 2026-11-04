import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import JobCard from "./components/JobCard";

import {Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/jobs" element={<JobsPage/>} />
        <Route path="/jobs/:id" element={<JobDetailsPage/>} />
        <Route path="/jobcard" element={<JobCard/>} />
      </Routes>
    </>
  );
};

export default App;
