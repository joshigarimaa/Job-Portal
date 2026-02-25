import React from "react";
import { useSelector } from "react-redux";
import LatestJobCards from "./LatestJobCards";

const LatestJobs = () => {
  const { allJobs } = useSelector((state) => state.job);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top</span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs && allJobs.length > 0 ? (
          allJobs
            .slice(0, 6)
            .map((item, index) => (
              <LatestJobCards key={item._id || index} job={item} />
            ))
        ) : (
          <p>No jobs available</p>
        )}
      </div>
    </div>
  );
};
export default LatestJobs;