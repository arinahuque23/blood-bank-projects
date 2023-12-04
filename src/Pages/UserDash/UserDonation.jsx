import { useContext } from "react";
import useDonationReq from "../../hooks/useDonationReq";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const UserDonation = () => {
  const [donation] = useDonationReq();
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(donation);
  const limitedDonation = donation.slice(0, 3);

  return (
    <div>
      <div className="mb-5 mt-10 text-center">
        <h2 className="text-3xl mb-5">Welcome.....<span className="text-2xl text-purple-400">{user?.displayName}</span></h2>
        <div className="">
        <h2 className="text-3xl text-red-400 ">
          Here Is Your Recent Added Donation....
        </h2>
        </div>
      </div>
      <div>
        <div>
          <div className="">
            <table className="table">
              <div className="mt-[15vh] mb-10">
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full max-w-full px-3 mb-6  mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                      <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                        <div className="flex-auto block py-8 pt-6 px-9">
                          <div className="overflow-x-auto w-full">
                            <table className="w-full my-0 align-middle text-dark border-neutral-200">
                              <thead className="align-bottom">
                                <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                  <th className="pb-3 uppercase text-start min-w-[175px]">
                                    requester name
                                  </th>
                                  <th className="pb-3 uppercase pr-16 min-w-[100px]">
                                    location
                                  </th>

                                  <th className="pb-3 uppercase pr-16text-end min-w-[175px]">
                                    date
                                  </th>
                                  <th className="pb-3 uppercase pr-12 text-end min-w-[100px]">
                                    Time
                                  </th>
                                  <th className="pb-3 uppercase pr-12 text-end min-w-[100px]">
                                    Status
                                  </th>
                                  <th className="pb-3 uppercase pr-12 text-end min-w-[100px]">
                                    Edit
                                  </th>
                                  <th className="pb-3 text-end min-w-[50px]">
                                    DETAILS
                                  </th>
                                </tr>
                              </thead>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
              {limitedDonation.map((data) => (
          <div key={data._id} className="">
        
            <div>
              {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"> */}
              <div>
                <div className="flex flex-wrap -mx-3 mb-5">
                  <div className="w-full max-w-full px-3 mb-6  mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                      <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                        <div className="flex-auto block py-8 pt-6 px-9">
                          <div className="overflow-x-auto">
                            <table className="w-full my-0 align-middle text-dark border-neutral-200">
                              <tbody>
                                <tr className="border-b border-dashed last:border-b-0">
                                  <td className="p-3 pl-0">
                                    <div className="flex items-center">
                                      <div className="flex flex-col justify-start">
                                        <a
                                          href="javascript:void(0)"
                                          className="mb-1 font-semibold transition-colors duration-200 ease-in-out  text-secondary-inverse hover:text-primary"
                                        >
                                          {data.reqname}
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="p-3 pr-0  lg:pl-[19vh]">
                                    <span className="font-semibold text-light-inverse text-md/normal">
                                      {data.address}
                                    </span>
                                  </td>
                                  <td className="p-3 pr-0  lg:pl-[19vh]">
                                    <span className="font-semibold text-light-inverse text-md/normal">
                                      {data.date}
                                    </span>
                                  </td>
                                  <td className="p-3 pr-0  lg:pl-[19vh]">
                                    <span className="font-semibold text-light-inverse text-md/normal">
                                      {data.time}
                                    </span>
                                  </td>
                                  <td className="p-3 pr-0  lg:pl-[19vh]">
                                    <span className="font-semibold text-light-inverse text-md/normal">
                                      {data.status}
                                    </span>
                                  </td>

                                  <td className="p-3 lg:pr-[10vh]">
                                    <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                      {/* <FaEdit></FaEdit> */}
                                    </span>
                                  </td>
                                  <td className=" lg:pr-12">
                                    <span className="font-semibold text-light-inverse text-md/normal">
                                      {/* <AiFillDelete></AiFillDelete> */}
                                    </span>
                                  </td>
                                 
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
              </div>
            </table>
            <div>
                <Link to="/dashboard/userRequest">
                <button className="btn btn-outline bg-red-200">
                        View All <FaArrowAltCircleRight></FaArrowAltCircleRight>
                </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDonation;
