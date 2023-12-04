/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUser from "../../hooks/useUser";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const SearchDonor = () => {
  
  //
  const [searchValue, setSearchValue] = useState('')
  const [user] = useUser();
   
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (


    <div>
      <div className="text-center mt-10 mb-10">
        <input onChange={handleChange}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        
      </div>
      

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-5">
        {user
          .filter((e) => e?.name?.toLowerCase().includes(searchValue.toLowerCase()) || e?.email?.toLowerCase().includes(searchValue.toLowerCase()) || e?.district?.toLowerCase().includes(searchValue.toLowerCase()) ||  e?.blood?.toLowerCase().includes(searchValue.toLowerCase()) ||  e?.upazila?.toLowerCase().includes(searchValue.toLowerCase()))
          .map((data) => (
          <div key={data._id} className="lg:mx-[10vh] mb-20 ">
            <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={data.image}
                className="mr-[2vh] avatar rounded-full w-28 shadow-2xl"
              />
              <div className="mr-10">
                <h1 className="text-5xl font-bold">{}</h1>
                <p className="">Name : {data.name}</p>
                <p>District :{data.district}</p>
                <p> Blood Group :{data.blood}</p>
                <p> Upazila{data.upazila}</p>
                <p> Email :{data.email}</p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDonor;
