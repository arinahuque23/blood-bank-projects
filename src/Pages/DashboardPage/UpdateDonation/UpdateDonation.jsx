import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

import useAuth from "../../../hooks/useAuth";
import { FaEdit } from "react-icons/fa";

const UpdateDonation = () => {
  const {
    reqname,
   _id,
    recipient,
    upazila,
    district,
    hospital,
    address,
    date,
    time,
    massage,
  } = useLoaderData();
  const { user } = useAuth();
 
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const addItem = {
      reqname: data.reqname,
      reqemail: data.reqemail,
      recipient: data.recipient,
      upazila: data.upazila,
      district: data.district,
      hospital: data.hospital,
      address: data.address,
      date: data.date,
      time: data.time,
      massage: data.massage,
      status: "pending",
      three: "three_data",
    };

    const createRes = await axiosPublic.patch(`/donations/${_id}`, addItem);
    console.log(createRes.data);
    if (createRes.data.modifiedCount > 0 ) {
      // show success popup
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Donation Updated Done",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-4xl text-center">Update Donation</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text text-2xl ">Requester name*</span>
            </label>
            <input
              type="text"
              defaultValue={reqname}
              placeholder="requester name"
              {...register("reqname", { required: true })}
              required
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text text-2xl ">Requester Email*</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              placeholder="requester email"
              {...register("reqemail", { required: true })}
              required
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text text-2xl ">Recipient name*</span>
            </label>
            <input
              type="text"
              defaultValue={recipient}
              placeholder="recipient"
              {...register("recipient", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex ">
            {/* category */}
            <div className="form-control mr-2 w-full my-6">
              <label className="label">
                <span className="label-text text-2xl ">Upazila</span>
              </label>
              {/* <select className="select select-bordered w-full max-w-xs"> */}

              <select
                className="input input-bordered "
                defaultValue={upazila}
                {...register("upazila", { required: true })}
              >
                <option disabled value="barishal">
                  select a option
                </option>
                <option value="barishal">Babugonj</option>
                <option value="chandpur">Chandpur Sadar </option>
                <option value="chittagonj"> Banshkhali</option>
                <option value="barishal">Kotchandpur</option>
                <option value="chandpur">Batiaghata</option>
                <option value="chittagonj">Ghoraghat</option>
                <option value="barishal">Balaganj</option>
                <option value="chandpur">Chowhali</option>
                <option value="chittagonj">Gangachara</option>
              </select>
              {/* {errors.upazila && (
                    <span className="text-red-600">Upazila is required</span>
                  )} */}
            </div>

            <div className="form-control mr-2 w-full my-6">
              <label className="label">
                <span className="label-text text-2xl ">District</span>
              </label>
              {/* <select className="select select-bordered w-full max-w-xs"> */}

              <select
              defaultValue={district}
                className="input input-bordered "
                {...register("district")}
              >
                <option disabled value="barishal">
                  select a option
                </option>
                <option value="barishal">Barishal</option>
                <option value="chandpur">Chandpur</option>
                <option value="chittagonj">Chittagonj</option>
                <option value="barishal"> Jhenaidah </option>
                <option value="chandpur">Khulna</option>
                <option value="chittagonj">Dinajpur</option>
                <option value="barishal">Sylhet</option>
                <option value="chandpur">Sirajgonj</option>
                <option value="chittagonj">Rangpur</option>
              </select>
              {/* {errors.district && (
                    <span className="text-red-600">District is required</span>
                  )} */}
            </div>
          </div>
          {/**dsjfjssf */}
          <div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-2xl ">Hospitals name*</span>
              </label>
              <input
              defaultValue={hospital}
                type="text"
                placeholder="hospital name"
                {...register("hospital", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-2xl ">Massage *</span>
              </label>
              <input
              defaultValue={massage}
                type="text"
                placeholder="write a massage"
                {...register("massage", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-2xl ">Full address*</span>
              </label>
              <input
              defaultValue={address}
                type="text"
                placeholder="Full address"
                {...register("address", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-2xl ">Donation Date *</span>
              </label>
              <input
              defaultValue={date}
                type="date"
                placeholder="donation date"
                {...register("date", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-2xl ">Donation time*</span>
              </label>
              <input
              defaultValue={time}
                type="time"
                placeholder="Time"
                {...register("time", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <button className="btn">
            Update
            <FaEdit className="ml-4"></FaEdit>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateDonation;
