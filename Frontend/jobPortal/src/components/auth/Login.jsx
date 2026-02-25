import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setLoading, setUser } from "../../redux/authSlice";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Navbar from "../shared/Navbar";
import { Button } from "@/components/ui/button";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { USER_API_END_POINT } from "../../utils/constant";

import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `${USER_API_END_POINT}/login`,
        {
          email: input.email,
          password: input.password,
          role: input.role,
        },
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        navigate("/");
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
          <h1 className="font-bold text-xl mb-5">Login</h1>

          <div className="my-3 space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter your email"
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

          {loading ? (
            <Button type="button" className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait!
            </Button>
          ) : (
            <button
              type="submit"
              className="w-full bg-[#6A38C2] hover:bg-[#5b30a6] text-white py-2 rounded"
            >
              Login
            </button>
          )}

          <div className="my-4 flex flex-col gap-2">
            <span className="text-sm text-center">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Signup
              </Link>
            </span>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
