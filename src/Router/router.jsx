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
import UserDonation from "../Pages/UserDash/UserDonation";
import UserRequest from "../Pages/DashboardPage/UserRequest/UserRequest";
import AdminRoute from "../Router/AdminRoute" 
import UpdateDonation from "../Pages/DashboardPage/UpdateDonation/UpdateDonation";
import CreateBlogPost from "../Pages/DashboardPage/CreateBlogPost/CreateBlogPost";
import SearchDonor from "../Pages/SearchDonor/SearchDonor";

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
                loader : ({params}) => fetch(`https://last-asgn-server.vercel.app/donations/${params.id}`)
              },
              {
                path :"/blog",
                element: <Blog></Blog>
              },
              {
                path :"/search",
                element: <PrivateRoute> <SearchDonor></SearchDonor> </PrivateRoute>
              }
            ]
      },
      {
        path : 'dashboard',
        element :  <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
        children : [
          {
            path : 'donation',
            element: <PrivateRoute><Donations></Donations></PrivateRoute>
          },
          {
            path : 'userHome',
            element: <PrivateRoute><UserDonation></UserDonation></PrivateRoute>
          },
          {
            path : 'createDonation',
            element: <PrivateRoute><CreateDonations></CreateDonations></PrivateRoute>
          },
          {
            path : 'userRequest',
            element: <PrivateRoute> <UserRequest></UserRequest> </PrivateRoute>
          
          },
          {
            path : 'donationRequest',
            element: <MyDonationRequestDash></MyDonationRequestDash> //all donation for admin
          },
          //admin
          {
            path : 'users',
            element : <AllUsers></AllUsers>
          },
          {
            path : 'updateItems/:id',
            element : <UpdateDonation></UpdateDonation> ,
            loader : ({params}) => fetch(`https://last-asgn-server.vercel.app/donations/${params.id}`)
          },
          {
            path: 'contentManagement',
            element: <CreateBlogPost></CreateBlogPost>
          }
        ]
      }
]);

