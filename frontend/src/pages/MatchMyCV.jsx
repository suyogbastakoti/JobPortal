import { useState } from "react"
import JobseekerSidebar from "../components/JobseekerSidebar"
import {
  IoSearchOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";

const MatchMyCV = () => {

    const [skills, setSkills] = useState(
        "React, Javascript, HTML, CSS, Node.js, MongoDB"
    );

    const [jobSkills, setJobSkills] = useState(
        "React, JavaScript, HTML, CSS, Tailwind, Express, MongoDB"
    );

    const [result, setResult] = useState(null);

    const handleMatch = ()=>{
        const userSkills = skills
            .split(",")
            .map((skill)=>skill.trim().toLowerCase())
            .filter(Boolean);
        
        const requiredSkills = jobSkills
            .split(",")
            .map((skill)=>skill.trim().toLowerCase())
            .filter(Boolean);

        const matchedSkills = requiredSkills.filter((skill)=>
        userSkills.includes(skill));

        const missingSkills = requiredSkills.filter(
            (skill)=> !userSkills.includes(skill)
        );

        const score = requiredSkills.length === 0 ? 0 : Math.round
        (
            (matchedSkills.length / requiredSkills.length) * 100
        ); 

        setResult({
            score,
            matchedSkills,
            missingSkills,
        });

    };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
        <JobseekerSidebar/>

        <main className="flex-1 p-5 md:p-8">
            <h1 className="text-2xl font-bold text-gray-800">
                Match My CV
            </h1>

            <p className="text-gray-500 mt-1">
                Compare your skills with a job's requirements.
            </p>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-8 max-w-4xl">

                <div className="mb-6">
                    <label className="block font-medium text-gray-700 mb-2">
                        Your Skills
                    </label>

                    <textarea
                        value={skills}
                        onChange={(e)=>setSkills(e.target.value)}
                        rows="3"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter skills separated by commas"   
                    />
                </div>

                <div className="mb-6">
                    <label className="block font-medium text-gray-700 mb-2">
                        Job Required Skills
                    </label>

                     <textarea
                        value={jobSkills}
                        onChange={(e) => setJobSkills(e.target.value)}
                        rows="3"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter required skills separated by commas"
                      />
                </div>

                <button
                    onClick={handleMatch}
                    className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700"
                >
                    <IoSearchOutline size={20} />
                    Match Skills
                </button>

                {result &&(
                    <div className="mt-8 border-t border-gray-200 pt-6">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Your Match Result
                        </h2>

                        <div className="mt-4">
                            <p className="text-3xl font-bold text-blue-600">
                                {result.score}%
                            </p>

                            <p className="text-sm text-gray-500">
                                Skills match score
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                            <div>
                                <h3 className="font-semibold text-green-700 mb-3">
                                    Matched Skills ({result.matchedSkills.length}) 
                                </h3>

                                {result.matchedSkills.map((skill)=>(
                                    <div
                                        key={skill}
                                        className="flex items-center gap-2 text-sm text-gray-700 mb-2"
                                    >
                                        <IoCheckmarkCircleOutline 
                                            className="text-green-600"
                                            size={18} 
                                        />
                                        {skill}
                                    </div>
                                ))}

                            </div>

                            <div>
                                <h3 className="font-semibold text-red-700 mb-3">
                                    Missing Skills ({result.missingSkills.length})
                                </h3>

                                {result.missingSkills.map((skill)=>(
                                    <div
                                        key={skill}
                                        className="flex items-center gap-2 text-sm text-gray-700 mb-2"
                                    >
                                        <IoCloseCircleOutline
                                            className="text-red-500"
                                            size={18}
                                        />
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                
            </div>
        </main>
    </div>
  );
};

export default MatchMyCV;
