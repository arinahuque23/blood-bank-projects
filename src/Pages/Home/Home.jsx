import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";


const Home = () => {
      return (
            <div>
                  <Helmet>
                       <title> Save Life || Home</title>
                  </Helmet>
                  <Banner></Banner>
                  <h2 className="text-5xl mt-10 text-center mb-10">
                        extra section
                  </h2>
            </div>
      );
};

export default Home;