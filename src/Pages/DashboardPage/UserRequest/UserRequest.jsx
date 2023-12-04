import { useContext } from "react";
import useDonationReq from "../../../hooks/useDonationReq";
import { AuthContext } from "../../../Provider/AuthProvider";

const UserRequest = () => {
  const [donation] = useDonationReq();
  console.log(donation);
  const { user } = useContext(AuthContext);
  const userDonations = donation.filter((item) => item.reqemail === user.email);

  return (
    <div>
      <div className="mt-[15vh] mb-10">
        <div className="flex  -mx-3 mb-5">
          <div className="w-full  px-3 mb-6  mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
              <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                <div className="flex-auto block py-8 pt-6 px-9">
                  <div className="overflow-x-auto w-full">
                    <table className="w-full my-0  text-dark border-neutral-200">
                      <thead className="align-bottom">
                        <tr className="font-semibold  text-secondary-dark">
                          <th className=" uppercase text-start ">
                            requester name
                          </th>

                          <th className=" uppercase text-start ">
                            recipient name
                          </th>

                          <th className="pb-3 text-start  uppercase   ">
                            date
                          </th>
                          <th className="pb-3 uppercase text-start  min-w-[100px]">
                            Time
                          </th>
                          <th className="pb-3 uppercase text-start  min-w-[100px]">
                            Status
                          </th>
                          <th className="pb-3 uppercase text-start  min-w-[100px]">
                            Upazila
                          </th>
                          <th className="pb-3 uppercase text-start   min-w-[50px]">
                            District
                          </th>
                          <th className="pb-3 uppercase text-start  min-w-[50px]">
                            Hospital
                          </th>
                          <th className="pb-3 uppercase text-end    ">
                            Massage
                          </th>
                          <th className="pb-3 uppercase text-end   min-w-[100px]">
                            location
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

      {userDonations.map((item) => (
        <div key={item._id}>
          <div>
            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"> */}
            <div>
              <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full px-3 mb-6  mx-auto">
                  <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                    <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                      <div className="flex-auto block py-8 pt-6 px-9">
                        <div className="overflow-x-auto">
                          <table className="w-full my-0  text-dark border-neutral-200">
                            <tbody>
                              <tr className="border-b border-dashed last:border-b-0">
                                <td className="p-3 pl-0">
                                  <div className="flex items-center">
                                    <div className="flex flex-col justify-start">
                                      <a
                                        // href="javascript:void(0)"
                                        className="mb-1 font-semibold    hover:text-primary"
                                      >
                                        {item.reqname}
                                      </a>
                                    </div>
                                  </div>
                                </td>

                                <td className="p-3 pr-[-50vh] lg:pl-[19vh] text-end ">
                                  <span className="text-center  ml-5 ">
                                    {item.recipient}
                                  </span>
                                </td>

                                <td className="p-3 pr-[-50vh] lg:pl-[19vh] text-end ">
                                  <span className="text-center">
                                    {item.date}
                                  </span>
                                </td>
                                <td className="p-3 pr-0  lg:pl-[19vh]">
                                  <span className="font-semibold text-light-inverse text-md/normal">
                                    {item.time}
                                  </span>
                                </td>
                                <td className="p-3 pr-0  lg:pl-[19vh]">
                                  <span className="font-semibold  border border-2xl ">
                                    <select className="select bg-base-400  ">
                                      <option disabled selected>
                                      {item.status}
                                      </option>
                                      
                                      <option>Done</option>
                                      <option>Inprogress</option>
                                      <option>Cancled</option>
                                     
                                    </select>
                                    
                                  </span>
                                </td>
                                <td className="p-3 pr-0  lg:pl-[19vh]">
                                  <span className="font-semibold text-light-inverse text-md/normal">
                                    {item.upazila}
                                  </span>
                                </td>
                                <td className="p-3 pr-0  lg:pl-[19vh]">
                                  <span className="font-semibold text-light-inverse text-md/normal">
                                    {item.district}
                                  </span>
                                </td>
                                <td className="p-3 pr-0  lg:pl-[19vh]">
                                  <span className="font-semibold text-light-inverse text-md/normal">
                                    {item.hospital}
                                  </span>
                                </td>
                                <td className="p-3 pr-0  lg:pl-[19vh]">
                                  <span className="font-semibold text-light-inverse text-md/normal">
                                    {item.massage}
                                  </span>
                                </td>
                                <td className="p-3 pr-0  lg:pl-[19vh]">
                                  <span className="font-semibold text-light-inverse text-md/normal">
                                    {item.address}
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

          {/* <p>Name: {item.reqname}</p>
          <p>Email: {item.reqemail}</p>
          <p>Recipient: {item.recipient}</p>
          <p>Upazila: {item.upazila}</p>
          <p>District: {item.district}</p>
          <p>Hospital: {item.hospital}</p>
          <p>Address: {item.address}</p>
          <p>Date: {item.date}</p>
          <p>Time: {item.time}</p>
          <p>Message: {item.massage}</p>
          <p>Status: {item.status}</p> */}
        </div>
      ))}
    </div>
  );
};

export default UserRequest;
