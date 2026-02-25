// import React, { use, useEffect } from "react";
// import Navbar from "./shared/Navbar";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   MapPin,
//   Briefcase,
//   IndianRupee,
//   Users,
//   Calendar,
//   Award,
// } from "lucide-react";
// import { useParams } from "react-router";
// import { setSingleJob } from "../redux/jobSlice";
// import useGetSingleJob from "../hooks/useGetSingleJob";
// import { useDispatch } from "react-redux";

// const JobDescription = () => {
//   const isApplied = false;
//   const params = useParams();
//   const jobId = params.id;
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (!jobId) return;
//     const fetchSingleJob = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_JOB_API_END_POINT}/get/${jobId}`,
//           { withCredentials: true },
//         );
//         if (response.data.success) {
//           dispatch(setSingleJob(response.data.job));
//         }
//       } catch (error) {
//         console.error("Error fetching single job:", error);
//       }
//     };
//     fetchSingleJob();
//   }, [jobId, dispatch,user?._id]);
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />

//       <div className="max-w-7xl mx-auto my-8 bg-white border rounded-2xl p-8 shadow-sm">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//           <div>
//             <h1 className="text-2xl font-bold">Frontend Developer</h1>
//             <p className="text-gray-500">Google • Bangalore, India</p>
//           </div>

//           <Button
//             className="bg-[#6A38C2] hover:bg-[#5b30a6]"
//             disabled={isApplied}
//           >
//             {isApplied ? "Already Applied" : "Apply Now"}
//           </Button>
//         </div>

//         {/* Badges */}
//         <div className="flex flex-wrap gap-2 mt-4">
//           <Badge variant="outline">Full Time</Badge>
//           <Badge variant="outline">2+ Years</Badge>
//           <Badge variant="outline">₹12 LPA</Badge>
//         </div>

//         {/* ===== NEW SECTION START ===== */}
//         <div className="mt-6">
//           <h2 className="font-semibold text-lg mb-3">Job Details</h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {/* Experience */}
//             <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
//               <Award className="h-5 w-5 text-[#6A38C2]" />
//               <div>
//                 <p className="text-sm text-gray-500">Experience</p>
//                 <p className="font-medium">2 – 4 Years</p>
//               </div>
//             </div>

//             {/* Total Applicants */}
//             <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
//               <Users className="h-5 w-5 text-[#6A38C2]" />
//               <div>
//                 <p className="text-sm text-gray-500">Total Applicants</p>
//                 <p className="font-medium">127 Candidates</p>
//               </div>
//             </div>

//             {/* Posted Date */}
//             <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
//               <Calendar className="h-5 w-5 text-[#6A38C2]" />
//               <div>
//                 <p className="text-sm text-gray-500">Posted On</p>
//                 <p className="font-medium">08 Feb 2025</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* ===== NEW SECTION END ===== */}

//         {/* Overview */}
//         <div className="mt-6">
//           <h2 className="font-semibold text-lg mb-2">Job Overview</h2>

//           <div className="flex flex-wrap gap-6 text-gray-600">
//             <div className="flex items-center gap-2">
//               <MapPin className="h-4 w-4 text-[#6A38C2]" />
//               Bangalore
//             </div>

//             <div className="flex items-center gap-2">
//               <Briefcase className="h-4 w-4 text-[#6A38C2]" />
//               Full Time
//             </div>

//             <div className="flex items-center gap-2">
//               <IndianRupee className="h-4 w-4 text-[#6A38C2]" />
//               10 – 14 LPA
//             </div>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="mt-6">
//           <h2 className="font-semibold text-lg mb-2">Description</h2>

//           <p className="text-gray-600 leading-relaxed">
//             We are looking for a skilled Frontend Developer to join our team.
//             You will be responsible for building responsive and high-performance
//             web applications using modern JavaScript frameworks.
//           </p>
//         </div>

//         {/* Responsibilities */}
//         <div className="mt-6">
//           <h2 className="font-semibold text-lg mb-2">Responsibilities</h2>

//           <ul className="list-disc ml-5 text-gray-600 space-y-1">
//             <li>Develop new user-facing features using React.js</li>
//             <li>Build reusable components and front-end libraries</li>
//             <li>Optimize components for maximum performance</li>
//             <li>Collaborate with designers and backend developers</li>
//           </ul>
//         </div>

//         {/* Skills */}
//         <div className="mt-6">
//           <h2 className="font-semibold text-lg mb-2">Required Skills</h2>

//           <div className="flex flex-wrap gap-2">
//             <Badge>React</Badge>
//             <Badge>JavaScript</Badge>
//             <Badge>HTML</Badge>
//             <Badge>CSS</Badge>
//             <Badge>Tailwind</Badge>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobDescription;

import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Briefcase,
  IndianRupee,
  Users,
  Calendar,
  Award,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { setSingleJob } from "../redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const JobDescription = () => {
  const { singleJob } = useSelector((state) => state.job);
  const { user } = useSelector((state) => state.auth);

  const isApplied =
    singleJob?.applicants?.some(
      (application) => 
        application.applicantId?.toString() === user?._id?.toString(),
    ) || false;

  const { id: jobId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!jobId) return;

    const fetchSingleJob = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_JOB_API_END_POINT}/get/${jobId}`,
          { withCredentials: true },
        );

        if (response.data.success) {
          dispatch(setSingleJob(response.data.job));
        }
      } catch (error) {
        console.error("Error fetching single job:", error);
      }
    };

    fetchSingleJob();
  }, [jobId, dispatch]); // ✅ removed unnecessary dependency

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto my-8 bg-white border rounded-2xl p-8 shadow-sm">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">{singleJob?.title}</h1>
            <p className="text-gray-500">{singleJob?.companyName}</p>
          </div>

          <Button
            className="bg-[#6A38C2] hover:bg-[#5b30a6]"
            disabled={isApplied}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="outline">{singleJob?.jobType}</Badge>
          <Badge variant="outline">{singleJob?.experience}+ Years</Badge>
          <Badge variant="outline">
            {singleJob?.salary ? `₹${singleJob.salary} LPA` : "N/A"}
          </Badge>
        </div>

        {/* Job Details */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-3">Job Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <Award className="h-5 w-5 text-[#6A38C2]" />
              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-medium">{singleJob?.experience}+ Years</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <Users className="h-5 w-5 text-[#6A38C2]" />
              <div>
                <p className="text-sm text-gray-500">Total Applicants</p>
                <p className="font-medium">
                  {singleJob?.totalApplicants || 0} Candidates
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <Calendar className="h-5 w-5 text-[#6A38C2]" />
              <div>
                <p className="text-sm text-gray-500">Posted On</p>
                <p className="font-medium">
                  {singleJob?.createdAt
                    ? new Date(singleJob.createdAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Overview */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Job Overview</h2>

          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#6A38C2]" />
              {singleJob?.location || "N/A"}
            </div>

            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-[#6A38C2]" />
              {singleJob?.jobType || "N/A"}
            </div>

            <div className="flex items-center gap-2">
              <IndianRupee className="h-4 w-4 text-[#6A38C2]" />
              {singleJob?.salary ? `₹${singleJob.salary} LPA` : "N/A"}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Description</h2>
          <p className="text-gray-600 leading-relaxed">
            {singleJob?.description || "No description available"}
          </p>
        </div>

        {/* Responsibilities */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Responsibilities</h2>

          <ul className="list-disc ml-5 text-gray-600 space-y-1">
            {singleJob?.responsibilities?.length > 0 ? (
              singleJob.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No responsibilities listed.</li>
            )}
          </ul>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Required Skills</h2>

          <div className="flex flex-wrap gap-2">
            {singleJob?.skills?.length > 0 ? (
              singleJob.skills.map((skill, index) => (
                <Badge key={index}>{skill}</Badge>
              ))
            ) : (
              <Badge>No skills listed</Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
