import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllJobs } from "../redux/jobSlice";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_JOB_API_END_POINT}/get`,
          { withCredentials: true },
        );
        if (response.data.success) {
          dispatch(setAllJobs(response.data.jobs));
        }
        console.log("All Jobs:", response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchAllJobs();
  }, [dispatch]);
};
export default useGetAllJobs;
