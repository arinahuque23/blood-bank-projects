/* eslint-disable no-unused-vars */
import { useContext } from "react";
import useDonationReq from "../../../hooks/useDonationReq";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Donations = () => {
  const [donation] = useDonationReq();
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(donation);
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
      queryKey: ['users'],
      enabled:!! localStorage.getItem('access-token'),
      queryFn: async () => {
          const res = await axiosSecure.get('/users');
          return res.data;
          
      }
     
  })

  return (
    <div>
      <span className="flex mt-10" style={{ color: "blue", fontWeight: "bold", fontSize: "30px" }}>
        {/* Style will be inherited from the parent element */}
        <h2 className="text-2xl"> Welcome ....</h2>
        <Typewriter
          //     words={["Send", "us", "a", "Message!"]}
          words={[`${user?.displayName}`]}
          loop={Infinity}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      
      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5 my-10">
        <div className="card card-body bg-red-100 w-[256px] h-[20vh] border mt-10 lg:mx-[10vh]">
          <h1> total blood donation request : {donation.length}</h1>
        </div>
        <div className="card card-body bg-blue-100 w-[256px] h-[20vh] border mt-10 lg:mx-[8vh]">
          <h1>Total Users:{users.length} </h1>
        </div>
        <div className="card card-body bg-purple-100 w-[256px] h-[20vh] border mt-10 lg:mx-[10vh]">
          <h1>Total Funding</h1>
        </div>
      </div>
    </div>
  );
};

export default Donations;
