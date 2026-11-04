import { useParams } from "react-router-dom";

const JobDetailsPage = () => {
  const {id} = useParams();
    return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Job Details
      </h1>

      <p className="mt-3 text-gray-500">
        Job ID: {id}
      </p>
    </div>
  );
};

export default JobDetailsPage;
