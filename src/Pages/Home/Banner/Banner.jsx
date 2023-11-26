import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/vY2Zcrs/wbdd-header.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md lg:mt-20">
            <Link to="/register">
              <button className="w-[20vh] mr-4 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
                Join as a Donor
              </button>
            </Link>
            <Link to="/register">
              <button className="w-[20vh] mr-4 h-12 text-white font-semibold bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-600 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
                Join as a Donor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
