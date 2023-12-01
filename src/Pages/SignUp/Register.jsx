import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL, data.blood, data.district)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
            blood: data.blood,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })

        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Save Life | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center ml-8 lg:text-left">
            <h1 className="text-3xl mb-3 text-red-400 font-bold">
              Please Register now!
            </h1>
            <div>
              <img
                src="https://i.ibb.co/h9nbJYK/sleek-contemporary-vector-art.webp"
                alt=""
              />
            </div>
          </div>
          <div className="card mb-5 flex-shrink-0 mt-5 w-[69vh]  border ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="flex ">
                <div className="form-control mr-2">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">Photo URL is required</span>
                  )}
                </div>
              </div>
              {/*2nd form */}
              <div className="flex">
                <div className="form-control mr-2">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Blood Group</span>
                  </label>

                  <select
                    className="input input-bordered"
                    name="blood"
                    placeholder="blood"
                    {...register("blood")}
                  >
                    <option value="a">a+</option>
                    <option value="b">b+</option>
                    <option value="ab+">ab+</option>
                    <option value="a">ab-</option>
                    <option value="b">b-</option>
                    <option value="ab+">a-</option>
                    <option value="b">o-</option>
                    <option value="ab+">o+</option>
                  </select>
                  {errors.blood && (
                    <span className="text-red-600">Blood is required</span>
                  )}
                </div>
              </div>
              {/*3rd form */}
              <div className="flex">
                <div className="form-control mr-2">
                  <label className="label">
                    <span className="label-text">District</span>
                  </label>
                  {/* <select className="select select-bordered w-full max-w-xs"> */}

                  <select
                    className="input input-bordered"
                    {...register("district")}
                  >
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
                  {errors.district && (
                    <span className="text-red-600">District is required</span>
                  )}
                </div>
                <div className="form-control mr-2">
                  <label className="label">
                    <span className="label-text">Upazila</span>
                  </label>
                  {/* <select className="select select-bordered w-full max-w-xs"> */}

                  <select
                    className="input input-bordered"
                    {...register("upazila")}
                  >
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
                  {errors.upazila && (
                    <span className="text-red-600">Upazila is required</span>
                  )}
                </div>
              </div>
              <div className="flex gap-5 mr-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number
                    </p>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
              </div>
              <div></div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center mb-5">
              <small>
                Already have an account{" "}
                <Link to="/login" className="text-red-400">
                  Login
                </Link>
              </small>
            </p>
            <div className="text-center">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
