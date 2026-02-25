// import React from "react";
// import { Bookmark } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";
// import { useNavigate } from "react-router";

// const Job = ({ job }) => {
//   const navigate = useNavigate();
//   const jobId = "randomId";

//   return (
//     <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
//       <div className="flex items-center justify-between">
//         <p className="text-sm text-gray-500">2 days ago</p>

//         <Button variant="outline" className="rounded-full" size="icon">
//           <Bookmark />
//         </Button>
//       </div>

//       <div className="flex items-center gap-2 my-2">
//         <Button>
//           <Avatar>
//             <AvatarImage src="https://www.shutterstock.com/image-vector/gj-letter-logo-design-g-260nw-1762673552.jpg" />
//           </Avatar>
//         </Button>

//         <div>
//           <h1 className="font-medium text-lg">Company name</h1>
//           <p className="text-gray-500 text-sm">India</p>
//         </div>
//       </div>

//       <div>
//         <h1 className="font-bold text-lg my-2">Title</h1>

//         <p className="text-sm text-gray-600">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit incidunt
//           rem quaerat, quam voluptates aliquam dignissimos autem provident
//           perferendis molestiae.
//         </p>
//       </div>

//       <div className="flex items-center gap-2 mt-4">
//         <Badge className="text-blue-700 font-bold" variant="ghost">
//           {job?.positions || 0} Positions
//         </Badge>

//         <Badge className="text-[#F83002] font-bold" variant="ghost">
//           {job?.jobType || "N/A"}
//         </Badge>

//         <Badge className="text-[#7209b7] font-bold" variant="ghost">
//           ₹ {job?.salary?.toLocaleString() || "0"}
//         </Badge>
//       </div>

//       <div className="flex items-center gap-4 mt-4">
//         {/* FIXED */}
//         <Button
//           variant="outline"
//           onClick={() => navigate(`/description/${job?._id}`)}
//         >
//           Details
//         </Button>

//         <Button className="bg-[#7209b7] hover:bg-[#5f078f]">
//           Save for later
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Job;

import React from "react";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  if (!job) return null;

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 hover:shadow-2xl transition">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {job?.createdAt
            ? new Date(job.createdAt).toLocaleDateString()
            : "Recently"}
        </p>

        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Avatar>
          <AvatarImage src={job?.company?.logo} />
          <AvatarFallback>
            {job?.company?.name?.charAt(0)?.toUpperCase() || "C"}
          </AvatarFallback>
        </Avatar>

        <div>
          <h1 className="font-medium text-lg">
            {job?.company?.name || "Company"}
          </h1>
          <p className="text-gray-500 text-sm">{job?.location || "Location"}</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title || "Job Title"}</h1>

        <p className="text-sm text-gray-600">
          {job?.description?.slice(0, 100) || "No description available"}
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

      <div className="flex items-center gap-4 mt-4">
        <Button
          variant="outline"
          onClick={() => navigate(`/description/${job?._id}`)}
        >
          Details
        </Button>

        <Button className="bg-[#7209b7] hover:bg-[#5f078f]">
          Save for later
        </Button>
      </div>
    </div>
  );
};

export default Job;
