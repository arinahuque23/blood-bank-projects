/* eslint-disable no-undef */

import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const DonationsDetails = () => {
            const {user} = useContext(AuthContext)
  const viewdetails = useLoaderData();
  console.log(viewdetails);

  const {
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
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Donate
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    {" "}
                    ✕{" "}
                  </button>

                  <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Donor Name</span>
                            </label>
                            <input
                              type="text"
                              placeholder="name"
                              value={user?.displayName  }
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
                              placeholder="email"
                              value={user?.email}
                              className="input input-bordered"
                              required
                            />
                          </div>
                        
                          <div className="form-control mt-6">
                         
                            <input type="submit" value="Submit" className="btn btn-primary" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationsDetails;
