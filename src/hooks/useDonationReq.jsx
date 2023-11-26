import { useEffect, useState } from "react";


const useDonationReq = () => {

    const [donation, setDonation] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
      fetch('http://localhost:5000/donations')
        .then(res => res.json())
        .then(data => {
            setDonation(data);
            setLoading(false);
        });
    }, []);
            return [donation,loading ]
};

export default useDonationReq;