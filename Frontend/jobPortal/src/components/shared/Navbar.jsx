// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// import { User2, LogOut } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "sonner";

// const Navbar = () => {
//   const { user } = useSelector((store) => store.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const logoutHandler = async () => {
//     try {
//       const response = await axios.post(`${USER_API_END_POINT}/logout`, {
//         withcredentials: true,
//       });
//       if (response.data.success) {
//         dispatch(setUser(null));
//         navigate("/");
//         toast.success("Logged out successfully");
//       } else {
//         toast.error(
//           response.data.message || "Failed to logout. Please try again.",
//         );
//       }
//     } catch (error) {
//       console.error("Logout error:", error);
//       toast.error(
//         error?.response?.data?.message || "Failed to logout. Please try again.",
//       );
//     }
//   };
//   return (
//     <div className="bg-white">
//       <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
//         <div>
//           <h1 className="text-2xl font-bold">
//             Job<span className="text-[#F83002]">Portal</span>
//           </h1>
//         </div>

//         <div className="flex items-center gap-5">
//           <ul className="flex font-medium items-center gap-5">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/jobs">Jobs</Link>
//             </li>
//             <li>
//               <Link to="/browse">Browse</Link>
//             </li>
//           </ul>
//           {!user ? (
//             <div className="flex items-center gap-2">
//               <Link to="/login">
//                 <Button variant="outline">Login</Button>
//               </Link>
//               <Link to="/signup">
//                 <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
//                   Signup
//                 </Button>
//               </Link>
//             </div>
//           ) : (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer">
//                   <AvatarImage
//                     src="https://github.com/shadcn.png"
//                     alt="@shadcn"
//                     className="grayscale"
//                   />
//                 </Avatar>
//               </PopoverTrigger>

//               <PopoverContent className="w-80">
//                 <div className="flex gap-4 space-y-2">
//                   <Avatar className="cursor-pointer">
//                     <AvatarImage
//                       src="https://github.com/shadcn.png"
//                       alt="@shadcn"
//                       className="grayscale"
//                     />
//                   </Avatar>

//                   <div>
//                     <h4 className="font-medium">Garima Joshi</h4>
//                     <p className="text-sm text-muted-foreground">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Architecto, doloribus?
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col text-gray-600 mt-3">
//                   <div className="flex w-fit items-center gap-2 cursor-pointer">
//                     <User2 className="w-4 h-4" />
//                     <Button variant="link">
//                       <Link to="/profile">View Profile</Link>
//                     </Button>
//                   </div>

//                   <div className="flex w-fit items-center gap-2 cursor-pointer">
//                     <LogOut className="w-4 h-4" />
//                     <Button onClick={logoutHandler} variant="link">
//                       Logout
//                     </Button>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// import { User2, LogOut } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "sonner";

// import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constant";
// import { setUser } from "@/redux/authSlice";

// const Navbar = () => {
//   const { user } = useSelector((store) => store.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logoutHandler = async () => {
//     try {
//       const response = await axios.post(
//         `${USER_API_END_POINT}/logout`,
//         {},
//         { withCredentials: true },
//       );

//       if (response.data.success) {
//         dispatch(setUser(null));
//         navigate("/");
//         toast.success("Logged out successfully");
//       } else {
//         toast.error(
//           response.data.message || "Failed to logout. Please try again.",
//         );
//       }
//     } catch (error) {
//       console.error("Logout error:", error);
//       toast.error(
//         error?.response?.data?.message || "Failed to logout. Please try again.",
//       );
//     }
//   };

//   return (
//     <div className="bg-white">
//       <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
//         <div>
//           <h1 className="text-2xl font-bold">
//             Job<span className="text-[#F83002]">Portal</span>
//           </h1>
//         </div>

//         <div className="flex items-center gap-5">
//           <ul className="flex font-medium items-center gap-5">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/jobs">Jobs</Link>
//             </li>
//             <li>
//               <Link to="/browse">Browse</Link>
//             </li>
//           </ul>

//           {!user ? (
//             <div className="flex items-center gap-2">
//               <Link to="/login">
//                 <Button variant="outline">Login</Button>
//               </Link>
//               <Link to="/signup">
//                 <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
//                   Signup
//                 </Button>
//               </Link>
//             </div>
//           ) : (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer">
//                   <AvatarImage
//                     src={user?.profile?.profilePhoto}
//                     alt="@shadcn"
//                     className="grayscale"
//                   />
//                 </Avatar>
//               </PopoverTrigger>

//               <PopoverContent className="w-80">
//                 <div className="flex gap-4 space-y-2">
//                   <Avatar className="cursor-pointer">
//                     <AvatarImage
//                       src={user?.profile?.profilePhoto}
//                       alt="@shadcn"
//                       className="grayscale"
//                     />
//                   </Avatar>

//                   <div>
//                     <h4 className="font-medium">Garima Joshi</h4>
//                     <p className="text-sm text-muted-foreground">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Architecto, doloribus?
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col text-gray-600 mt-3">
//                   <div className="flex w-fit items-center gap-2 cursor-pointer">
//                     <User2 className="w-4 h-4" />
//                     <Button variant="link">
//                       <Link to="/profile">View Profile</Link>
//                     </Button>
//                   </div>

//                   <div className="flex w-fit items-center gap-2 cursor-pointer">
//                     <LogOut className="w-4 h-4" />
//                     <Button onClick={logoutHandler} variant="link">
//                       Logout
//                     </Button>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { User2, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const response = await axios.post(
        `${USER_API_END_POINT}/logout`,
        {},
        { withCredentials: true },
      );

      // ✅ Correct logout check
      if (response.status === 200) {
        dispatch(setUser(null));
        navigate("/");
        toast.success("Logged out successfully");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error(
        error?.response?.data?.message || "Failed to logout. Please try again.",
      );
    }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt={user?.fullname}
                    className="grayscale"
                  />
                  <AvatarFallback>
                    {user?.fullname?.charAt(0)?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-80">
                <div className="flex gap-4 items-center">
                  <Avatar>
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt={user?.fullname}
                      className="grayscale"
                    />
                    <AvatarFallback>
                      {user?.fullname?.charAt(0)?.toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio || "No bio added yet"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col text-gray-600 mt-3 gap-2">
                  <div className="flex items-center gap-2">
                    <User2 className="w-4 h-4" />
                    <Link to="/profile">
                      <Button variant="link">View Profile</Button>
                    </Link>
                  </div>

                  <div className="flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
