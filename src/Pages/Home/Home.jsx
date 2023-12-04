import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import OurTeam from "./OurTeam/OurTeam";
import Contact from "./OurTeam/Contact";


const Home = () => {
      return (
            <div>
                  <Helmet>
                       <title> Save Life || Home</title>
                  </Helmet>
                  <Banner></Banner>
                  <h2 className="text-5xl mt-10 text-center mb-10">
                        <OurTeam></OurTeam>
                  </h2>
                  <h2 className="text-5xl mt-10 text-center mb-10">
                        <Contact></Contact>
                  </h2>
            </div>
      );
};

export default Home;