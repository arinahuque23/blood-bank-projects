import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const MainLay = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default MainLay;