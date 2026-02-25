import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Navbar from "../shared/Navbar";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/authSlice";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `${USER_API_END_POINT}/signup`,
        {
          fullname: input.fullname,
          email: input.email,
          phoneNumber: input.phoneNumber,
          password: input.password,
          role: input.role,
        },
        { withCredentials: true },
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Signup</h1>

          <div className="my-3 space-y-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              onChange={changeEventHandler}
              name="fullname"
              placeholder="Enter your name"
            />
          </div>

          <div className="my-3 space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              onChange={changeEventHandler}
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="my-3 space-y-2">
            <Label>Phone Number</Label>
            <Input
              type="tel"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              name="phoneNumber"
              placeholder="Enter your number"
            />
          </div>

          <div className="my-3 space-y-2">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Enter your password"
            />
          </div>

          <div className="my-4 space-y-2">
            <Label>Select Role</Label>

            <RadioGroup
              value={input.role}
              onValueChange={(value) => setInput({ ...input, role: value })}
              className="flex gap-4"
            >
              <label className="flex items-center gap-3 border px-4 py-2 rounded-md cursor-pointer hover:border-[#6A38C2] transition">
                <RadioGroupItem value="student" id="r1" />
                <span>Student</span>
              </label>

              <label className="flex items-center gap-3 border px-4 py-2 rounded-md cursor-pointer hover:border-[#6A38C2] transition">
                <RadioGroupItem value="recruiter" id="r2" />
                <span>Recruiter</span>
              </label>
            </RadioGroup>
          </div>

          <div className="my-4 space-y-2">
            <Label>Profile</Label>
            <Input
              type="file"
              name="profile"
              accept="image/*"
              onChange={changeFileHandler}
              className="cursor-pointer"
            />
          </div>

          <div className="my-4 flex flex-col gap-2">
            {loading ? (
              <Button className="w-full my-4">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait!
              </Button>
            ) : (
              <button
                type="submit"
                className="w-full bg-[#6A38C2] hover:bg-[#5b30a6] text-white py-2 rounded"
              >
                Signup
              </button>
            )}

            <span className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
