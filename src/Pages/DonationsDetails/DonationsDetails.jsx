/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { Helmet } from "react-helmet-async";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useDonor from "../../hooks/useDonor";

const DonationsDetails = () => {
  const { user } = useContext(AuthContext);
  const viewdetails = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useDonor();
  
  const {
    _id,
    donation_date,
    donation_time,
    full_address,
    hpspital_name,
    massage,
    recipient_name,
    recipient_district,
    recipient_upazila,
    requester_email,
    requester_name,
    status,
  } = viewdetails;

 

  //extra
  const handleDonationConfirm = (event) => {
    if (user && user.email) {
      //send donate item to the database

      const form = event.target;
      const name = form.name.value;
      const email = user?.email;
      const donate = {
        donoName: name,
        email: email,
        donorid: _id,
      };
      
      axiosSecure.post('/donors', donate)
     
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks For Donating",
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
          
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          //   send the user to the login page
        navigate("/login", { state: { from: location } });
        }
      });
    }
   
  };

  return (
    <div>
      <Helmet>
        <title>Save Life | details</title>
      </Helmet>
      <div>
        <div className="m-12 bg-red-500 lg:max-w-[450px] lg:mx-[69vh] rounded-xl hover:bg-blue-800 hover:scale-110 duration-700 p-5">
          <p className="text-base leading-7 text-white font-semibold space-y-4">
            Requester: {requester_name}
          </p>
          <h4 className="py-2 text-white font-bold">
            Mail : {requester_email}
          </h4>
          <p className="text-sm leading-7 text-slate-300 space-y-4">
            Recipient Name : {recipient_name}
          </p>
          <div className="flex gap-6 text-white">
            <p> District : {recipient_district}</p>
            <p> Upazila : {recipient_upazila}</p>
          </div>
          <div className="flex gap-6 text-white">
            <p>Donation Time :{donation_time} </p>
            <p>Donation Date : {donation_date}</p>
          </div>
          <div className="text-white">
            <p> Address : {full_address}</p>
            <p>Hospital : {hpspital_name}</p>
          </div>
          <div className="text-white">
            <p>Massage : {massage}</p>
            <p>Status : {status} . </p>
          </div>

          <div className="pt-5 pb-2 flex justify-center">
            <div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Donate
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <div className="card shrink-0 mt-10 mb-10  shadow-2xl bg-base-100">
                    <form
                      onSubmit={handleDonationConfirm}
                      className="card-body"
                    >
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Donor Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="name"
                          defaultValue={user?.displayName}
                          name="name"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Donor Email</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          defaultValue={user?.email}
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control mt-6">
                        <input
                          type="submit"
                          value="Donate Confirm"
                          className="btn btn-primary"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form> */}
              </dialog>
            </div>
          
            

          
          </div>
        </div>
      
      </div>
    </div>
  
  );
};

export default DonationsDetails;
