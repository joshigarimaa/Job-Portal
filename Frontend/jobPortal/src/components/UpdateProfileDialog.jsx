import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";

import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    bio: "",
    skills: "",
    resume: null,
  });

  // Prefill
  useEffect(() => {
    if (user) {
      setForm({
        name: user?.fullname || "",
        email: user?.email || "",
        number: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.join(", ") || "",
        resume: null,
      });
    }
  }, [user, open]);

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const fileHandler = (e) => {
    setForm({ ...form, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("fullname", form.name);
      formData.append("email", form.email);
      formData.append("phoneNumber", form.number);
      formData.append("bio", form.bio);
      formData.append("skills", form.skills); // backend split karega

      if (form.resume) {
        formData.append("resume", form.resume);
      }

      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        },
      );

      if (res.data) {
        dispatch(setUser(res.data.user));
        toast.success("Profile updated successfully");
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to update profile");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Profile</DialogTitle>

          <DialogDescription>
            Update your profile information and skills.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={form.name}
              onChange={changeHandler}
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={form.email}
              onChange={changeHandler}
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="number">Phone Number</Label>
            <Input
              id="number"
              pattern="[0-9]{10}"
              value={form.number}
              onChange={changeHandler}
              placeholder="Enter phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <textarea
              id="bio"
              className="w-full border rounded-md p-2 focus:ring-1 focus:ring-[#6A38C2] min-h-[80px]"
              value={form.bio}
              onChange={changeHandler}
              placeholder="Tell us about yourself"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">Skills</Label>
            <Input
              id="skills"
              value={form.skills}
              onChange={changeHandler}
              placeholder="HTML, CSS, React..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume">Resume</Label>
            <Input
              type="file"
              //value={form.resume}
              onChange={fileHandler}
              accept="application/pdf,pdf,.doc,.docx"
              id="resume"
            />
          </div>

          <DialogFooter>
            <Button type="submit" className="bg-[#6A38C2]">
              Save Changes
            </Button>

            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;
