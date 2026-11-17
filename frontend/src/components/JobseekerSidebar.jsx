import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  IoGridOutline,
  IoBriefcaseOutline,
  IoDocumentTextOutline,
  IoPersonOutline,
  IoCloudUploadOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoSearchOutline,
} from "react-icons/io5";

const JobseekerSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "Overview",
      path: "/jobseeker/dashboard",
      icon: IoGridOutline,
    },
    {
      name: "Browse Jobs",
      path: "/jobs",
      icon: IoBriefcaseOutline,
    },
    {
      name: "My Applications",
      path: "/jobseeker/applications",
      icon: IoDocumentTextOutline,
    },
    {
      name: "My Profile",
      path: "/jobseeker/profile",
      icon: IoPersonOutline,
    },
    {
      name: "CV Management",
      path: "/jobseeker/cv",
      icon: IoCloudUploadOutline,
    },
    {
      name: "Match My CV",
      path: "/jobseeker/match-cv",
      icon: IoSearchOutline,
    },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-white p-4 border-b">
        <h2 className="text-xl font-bold text-blue-600">
          SmartHire Hub
        </h2>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700"
          aria-label="Toggle sidebar"
        >
          {isOpen ? (
            <IoCloseOutline size={28} />
          ) : (
            <IoMenuOutline size={28} />
          )}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50
          w-72 md:w-64 h-screen
          bg-white border-r p-5
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          overflow-y-auto
        `}
      >
        <h2 className="text-xl font-bold text-blue-600 mb-8 hidden md:block">
          SmartHire Hub
        </h2>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/jobseeker/dashboard"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <Icon size={20} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default JobseekerSidebar;