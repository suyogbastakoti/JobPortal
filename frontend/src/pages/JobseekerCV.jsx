import { useState } from "react";
import JobseekerSidebar from "../components/JobseekerSidebar";
import {
  IoCloudUploadOutline,
  IoDocumentTextOutline,
  IoTrashOutline,
} from "react-icons/io5";

const JobseekerCV = () => {
  const [cv, setCv] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setCv(selectedFile);
      setMessage("CV selected successfully.");
    }
  };

  const handleRemove = () => {
    setCv(null);
    setMessage("CV removed successfully.");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <JobseekerSidebar />

      <main className="flex-1 p-5 md:p-8">
        <h1 className="text-2xl font-bold text-gray-800">
          CV Management
        </h1>
        <p className="text-gray-500 mt-1">
          Upload and manage your professional CV.
        </p>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-8 max-w-3xl">
          <h2 className="text-lg font-semibold text-gray-800">
            Your Resume
          </h2>

          <div className="mt-6 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
            <IoCloudUploadOutline
              size={45}
              className="mx-auto text-blue-600"
            />

            <h3 className="font-semibold text-gray-700 mt-3">
              Upload your CV
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              PDF or DOC/DOCX files are supported.
            </p>

            <label className="inline-block mt-5 px-5 py-2.5 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700">
              Choose File
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {cv && (
            <div className="mt-6 flex items-center justify-between gap-4 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-3 min-w-0">
                <IoDocumentTextOutline
                  size={28}
                  className="text-blue-600 shrink-0"
                />

                <div className="min-w-0">
                  <p className="font-medium text-gray-800 truncate">
                    {cv.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(cv.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>

              <button
                onClick={handleRemove}
                className="text-red-500 hover:text-red-700"
                title="Remove CV"
              >
                <IoTrashOutline size={20} />
              </button>
            </div>
          )}

          {message && (
            <p className="text-sm text-green-600 mt-4">
              {message}
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default JobseekerCV;