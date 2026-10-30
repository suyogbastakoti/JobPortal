import { IoBag } from "react-icons/io5";

const HomePage = () => {
  return (
    <>
      <div className="text-center space-y-5 p-16 bg-blue-100">
      <h1 className="text-3xl font-bold" >
        Find Your Dream Job
      </h1>

      <h1 className="text-3xl text-blue-500 font-bold">
        Start Your Journey
      </h1>

      <p>
        Discover opportunities that match your skills and ambitions.
      </p>

      <div className="max-w-lg mx-auto bg-white rounded-xl">
        <input 
          type="text"
          placeholder="Job Titile or Keyword"
          className="p-3 rounded-xl w-full" 
        />
        <hr />
        <input 
          type="text"
          placeholder="Location"
          className="p-3 rounded-xl w-full" 
        />

        <button className="bg-blue-500 text-white text-xl hover:bg-blue-600 hover:cursor-pointer w-full rounded-xl p-3">
          Search Jobs
        </button>
      </div>



    </div>

    <div className="p-16">
      <h1 className="text-2xl font-bold">
        Latest Jobs
      </h1>

      <div className=" p-14 rounded-xl text-center border border-gray-300">
        <span className="flex justify-center">
          <IoBag />
        </span>
        
        <h2>
          No jobs available yet
        </h2>
        <p>
          Listings will appear here when jobs are added.
        </p>
      </div>

    </div>
    </>
    
    
  );
};

export default HomePage;
