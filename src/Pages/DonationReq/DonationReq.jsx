import { Link } from "react-router-dom";
import useDonationReq from "../../hooks/useDonationReq";

const DonationReq = () => {
  const [donation] = useDonationReq();
  console.log(donation);

  return (
    <div>
      <div>
        
        <h2 className="text-4xl text-center mt-10 text-red-400">
          All Donation Request : {donation.length}
        </h2>
      </div>
      <div className="mt-[15vh] mb-10">
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mb-6  mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
              <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                <div className="flex-auto block py-8 pt-6 px-9">
                  <div className="overflow-x-auto">
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
      {donation.map((data) => (
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

                                <td className="p-3 lg:pr-[10vh]">
                                  <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                    {data.date}
                                  </span>
                                </td>
                                <td className=" lg:pr-12">
                                  <span className="font-semibold text-light-inverse text-md/normal">
                                    {data.time}
                                  </span>
                                </td>
                                <td className="p-3 pr-0 text-end">
                                  <Link to={`/viewdetails/${data._id}`}>
                                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                      <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="w-4 h-4 font-bold text-red-600"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                          />
                                        </svg>
                                      </span>
                                    </button>
                                  </Link>
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
  );
};

export default DonationReq;
