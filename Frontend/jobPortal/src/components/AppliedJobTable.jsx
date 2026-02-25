import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

const AppliedJobTable = () => {
  const appliedJobs = [
    {
      date: "10 Feb 2025",
      role: "Frontend Developer",
      company: "Google",
      status: "Pending",
    },
    {
      date: "15 Feb 2025",
      role: "React Developer",
      company: "Microsoft",
      status: "Shortlisted",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-50 text-yellow-700 border border-yellow-200";
      case "Shortlisted":
        return "bg-green-50 text-green-700 border border-green-200";
      case "Rejected":
        return "bg-red-50 text-red-700 border border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border border-gray-200";
    }
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <Table>
        <TableCaption className="text-sm text-gray-500 py-2">
          A list of your applied jobs
        </TableCaption>

        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-semibold text-gray-700">Date</TableHead>

            <TableHead className="font-semibold text-gray-700">
              Job Role
            </TableHead>

            <TableHead className="font-semibold text-gray-700">
              Company
            </TableHead>

            <TableHead className="font-semibold text-gray-700">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {appliedJobs.length > 0 ? (
            appliedJobs.map((job, index) => (
              <TableRow
                key={index}
                className="hover:bg-gray-50 transition duration-150"
              >
                <TableCell className="text-gray-500 text-sm">
                  {job.date}
                </TableCell>

                <TableCell className="font-medium text-gray-800">
                  {job.role}
                </TableCell>

                <TableCell className="text-gray-600">{job.company}</TableCell>

                <TableCell>
                  <Badge
                    className={`${getStatusColor(
                      job.status,
                    )} px-3 py-1 rounded-md`}
                  >
                    {job.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-400 py-8">
                No jobs applied yet
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
