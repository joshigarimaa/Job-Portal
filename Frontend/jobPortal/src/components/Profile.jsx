import React, { useState } from "react";
import Navbar from "./shared/Navbar";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Contact, Mail, Pen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

import { useSelector } from "react-redux";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const skills = user?.profile?.skills || [];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* PROFILE SECTION */}
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-6 p-8 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex items-center gap-5">
            <Avatar className="h-24 w-24 border shadow-sm">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/gj-letter-logo-design-g-260nw-1762673552.jpg"
                alt="profile"
                className="object-cover"
              />
            </Avatar>

            <div>
              <h1 className="font-bold text-2xl text-gray-800">
                {user?.fullname || "User Name"}
              </h1>

              <p className="text-gray-500 mt-1 max-w-xl">
                {user?.profile?.bio ||
                  "Add your bio to showcase your skills and experience."}
              </p>
            </div>
          </div>

          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            className="self-start"
          >
            <Pen className="h-4 w-4 mr-1" />
            Edit
          </Button>
        </div>

        {/* CONTACT */}
        <div className="my-8 border-t pt-5">
          <h2 className="font-semibold text-lg mb-3 text-gray-700">
            Contact Information
          </h2>

          <div className="flex items-center gap-3 my-2 text-gray-600">
            <Mail className="h-4 w-4 text-[#6A38C2]" />
            <span>{user?.email || "Email not added"}</span>
          </div>

          <div className="flex items-center gap-3 my-2 text-gray-600">
            <Contact className="h-4 w-4 text-[#6A38C2]" />
            <span>{user?.phoneNumber || "Phone not added"}</span>
          </div>
        </div>

        {/* SKILLS */}
        <div className="border-t pt-5">
          <h2 className="font-semibold text-lg mb-3 text-gray-700">Skills</h2>

          {skills.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {skills.map((item, index) => (
                <Badge
                  key={index}
                  className="px-3 py-1 bg-purple-50 text-[#6A38C2]"
                >
                  {item}
                </Badge>
              ))}
            </div>
          ) : (
            <span className="text-gray-500">No skills added yet</span>
          )}
        </div>

        {/* RESUME */}
        <div className="mt-6 border-t pt-5">
          <Label className="font-semibold text-gray-700">Resume</Label>

          {user?.profile?.resume ? (
            <a
              href={user.profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-white bg-[#6A38C2] hover:bg-[#5b30a6] transition px-4 py-2 rounded-md w-fit"
            >
              View Resume
            </a>
          ) : (
            <span className="text-gray-500">Resume not uploaded</span>
          )}
        </div>
      </div>

      {/* APPLIED JOBS */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-gray-200 p-6 mb-10 shadow-sm">
        <h1 className="font-bold text-xl mb-4 text-gray-800">Applied Jobs</h1>
        <AppliedJobTable />
      </div>

      {/* DIALOG */}
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
