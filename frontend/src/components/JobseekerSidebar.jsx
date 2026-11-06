
import { NavLink } from "react-router-dom";
import {
  IoGridOutline,
  IoBriefcaseOutline,
  IoDocumentTextOutline,
  IoPersonOutline,
  IoCloudUploadOutline,
} from "react-icons/io5";

const JobseekerSidebar = () => {
    const menuItems = [
        {
            name: "Overview",
            path: "/jobseeker/dashboard",
            icon: IoGridOutline,
        },
        {
            name: "Browse Jobs",
            path: "/jobseeker/dashboard",
            icon: IoGridOutline,
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
    ];
  return (
    <aside className="w-full md:w-64 bg-white border-r min-h-screen p-5">
        <h2 className="text-xl font-bold text-blue-600 mb-8">
            SmartHire Hub
        </h2>

        <nav className="space-y-2">
            {menuItems.map((item)=>{
                const Icon = item.icon;

                return(
                    <NavLink
                        key={item.name}
                        to={item.path}
                        end={item.path === "/jobseeker/dashboard"}
                        className={({ isActive })=>
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
  );
};

export default JobseekerSidebar;
