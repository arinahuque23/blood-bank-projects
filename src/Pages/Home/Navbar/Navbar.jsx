/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import logo from "../../../assets/blood.png";
import { useContext } from "react";
// import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
// import "./Navbar.css";
import { AuthContext } from "../../../Provider/AuthProvider";
import useDonor from "../../../hooks/useDonor";
// import  {useDonor}  from "../../../hooks/useDonor";


const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
 
  //tanstact 
  const [donor] = useDonor();
 
 
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <>
      <li>
        <Link className=" hover:text-red-300"  to="/">Home </Link>
      </li>
      <li>
        <Link  className=" hover:text-red-300" to="/donationrequest"> Donation-Request</Link>
      </li>
      <li>
        <Link className=" hover:text-red-300" to="/blog"> Blog </Link>
      </li>
     
      
      <li>
            <Link to="/dashboard/donation" className="">
            Dashbord  <button className="text-red-400">+{donor.length}</button>
            </Link>
        </li>

      {user?.email ? (
        <li>
          <button onClick={handleLogOut}>Log Out</button>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar   bg-base-200 text-black  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <div className="flex   pl-4 mb-2">
              <img className="lg:w-[6vh] lg:mt-4 w-[7vh]   mt-4 " src={logo} alt="" />
              <button className="btn mt-4 ml-4 text-red-500">Save-Life</button>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex md:ml-[10vh] lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl ">{navItems}</ul>
        </div>
        <div className="navbar-end pr-4 text-black">
          <div className="dropdown dropdown-end ">
            {!loading ? (
              <div>
                {user ? (
                  <>
                    <div
                      id="parent-user-profile"
                      className="flex items-center gap-x-3"
                    >
                      <label
                        id="user-pic"
                        tabIndex={0}
                        className="relative btn btn-ghost btn-circle avatar flex-row-reverse"
                      >
                        <div className="w-12 rounded-full">
                          <img
                            src={
                              user.photoURL
                                ? user.photoURL
                                : "https://i.ibb.co/9VLctWw/7153150.png"
                            }
                          />
                        </div>
                        <p
                          id="user-name"
                          className="absolute right-14 top-5 opacity-0 text-lg btn bg-white border-0 shadow-md btn-sm font-medium text-error overflow-hidden"
                        >
                          {user.displayName ? user.displayName : user?.email}
                        </p>
                      </label>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link to="/profile" className="justify-between">
                          Profile
                          <span className="badge">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/register" className="justify-between">
                          Register
                          
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/services">Services</Link>
                      </li> */}

                      <li tabIndex={0}>
                        <details>
                          <summary>Dashbord</summary>
                          {/* <ul className="p-2 text-black">
                            <li>
                              {" "}
                              <Link to="/manageservices"> My-Services </Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/addService"> Add-Serivces </Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/mySchedules"> My-Schedules </Link>
                            </li>
                          </ul> */}
                        </details>
                      </li>

                      <li>
                        <Link onClick={handleLogOut}>Logout</Link>
                      </li>
                    </ul>
                  </>
                ) : (
                  <Link
                    to="/register"
                    className="btn btn-sm btn-outline hover:border-error rounded-md hover:bg-error hover:text-white"
                  >
                    Register
                  </Link>
                )}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Navbar;
