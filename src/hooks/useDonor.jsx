// api, axios (axios secure), tan stack 

import { useQuery } from "@tanstack/react-query";


import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useDonor = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useContext(AuthContext);
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