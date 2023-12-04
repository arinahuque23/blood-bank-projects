import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useDonationblog = () =>  {
            const axiosPublic = useAxiosPublic();
          
          
          
              const {data : blog = [], isPending: loading, refetch} = useQuery({
                queryKey:['blog'],
                queryFn: async()=>{
                  const res = await axiosPublic.get('/blogs');
                  return res.data
                }
              })
                      return [blog,loading ,refetch]
          };

export default useDonationblog;