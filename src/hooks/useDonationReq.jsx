import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";


const useDonationReq = () => {
  const axiosPublic = useAxiosPublic();



    const {data : donation = [], isPending: loading, refetch} = useQuery({
      queryKey:['donation'],
      queryFn: async()=>{
        const res = await axiosPublic.get('/donations');
        return res.data
      }
    })
            return [donation,loading ,refetch]
};

export default useDonationReq;