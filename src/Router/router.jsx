import { createBrowserRouter } from "react-router-dom";
import MainLay from "../Layouts/MainLay";
import Home from "../Pages/Home/Home";
import Register from "../Pages/SignUp/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import DonationReq from "../Pages/DonationReq/DonationReq";
import Blog from "../Pages/Blog/Blog";
import DonationsDetails from "../Pages/DonationsDetails/DonationsDetails";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../Layouts/Dashboard";
import Donations from "../Pages/DashboardPage/Donations/Donations";
import AllUsers from "../Pages/DashboardPage/Donations/AllUsers/AllUsers";
import CreateDonations from "../Pages/DashboardPage/CreateDonation/CreateDonations";
import MyDonationRequestDash from "../Pages/DashboardPage/MyDonationRequestDash/MyDonationRequestDash";


export const router = createBrowserRouter([
      {
            path: "/",
            element: <MainLay></MainLay> ,
            errorElement: <Error></Error>,
            children: [
              {
                  path: '/',
                  element: <Home></Home>
              },
              {
                  path : "/register",
                  element : <Register></Register>
              },
              {
                  path :"/login",
                  element: <Login></Login>
              },
              {
                path : "/donationrequest",
                element : <DonationReq></DonationReq>
              },
              {
                path: "/viewdetails/:id",
                element:<PrivateRoute><DonationsDetails></DonationsDetails></PrivateRoute> ,
                loader : ({params}) => fetch(`http://localhost:5000/donations/${params.id}`)
              },
              {
                path :"/blog",
                element: <Blog></Blog>
              }
            ]
      },
      {
        path : 'dashboard',
        element : <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
        children : [
          {
            path : 'donation',
            element: <Donations></Donations>
          },
          {
            path : 'createDonation',
            element: <CreateDonations></CreateDonations>
          },
          {
            path : 'donationRequest',
            element: <MyDonationRequestDash></MyDonationRequestDash>
          },
          //admin
          {
            path : 'users',
            element : <AllUsers></AllUsers>
          }
        ]
      }
]);

