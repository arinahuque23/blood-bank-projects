// api, axios (axios secure), tan stack 

import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useDonor = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const { refetch, data: donor = [] } = useQuery({
        queryKey: ['donor', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/donors?email=${user.email}`);
            return res.data;
        }
    })

    return [donor, refetch]
};

export default useDonor;