// import React from "react";
// import { Badge } from "@/components/ui/badge";

// const LatestJobCards = ({job}) => {
//   return (
//     <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
//       <div>
//         <h1 className="font-medium text-lg">{job?.companyName}</h1>
//         <p className="text-gray-500 text-sm">{job?.location}</p>
//       </div>
//       <div>
//         <h1 className="font-bold my-2 text-lg">{job?.title}</h1>
//         <p className="text-gray-600 text-sm">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ab?
//         </p>
//       </div>
//       <div className="flex items-center gap-2 mt-4">
//         <Badge className="text-blue-700 font-bold" variant="ghost">
//           {job?.positions} Positions
//         </Badge>
//         <Badge className="text-[#F83002] font-bold" variant="ghost">
//           {job?.jobType}
//         </Badge>
//         <Badge className="text-[#7209b7] font-bold" variant="ghost">
//           {job?.salary}
//         </Badge>
//       </div>
//     </div>
//   );
// };

// export default LatestJobCards;

import React from "react";
import { Badge } from "@/components/ui/badge";

const LatestJobCards = ({ job }) => {
  if (!job) return null;

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer hover:shadow-2xl transition">
      <div>
        <h1 className="font-medium text-lg">
          {job?.company?.name || job?.companyName || "Company Name"}
        </h1>
        <p className="text-gray-500 text-sm">{job?.location || "Location"}</p>
      </div>

      <div>
        <h1 className="font-bold my-2 text-lg">{job?.title || "Job Title"}</h1>
        <p className="text-gray-600 text-sm">
          {job?.description?.slice(0, 80) || "Job description not available"}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.positions || 0} Positions
        </Badge>

        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.jobType || "N/A"}
        </Badge>

        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          ₹ {job?.salary?.toLocaleString() || "0"}
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
