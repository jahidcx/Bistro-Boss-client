import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import PrivateRoutes from "./PrivateRoutes";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";


const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/menu',
                element:<OurMenu></OurMenu>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path:'/',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            // normal user related route
            {
                path:'/dashboard/cart',
                element:<Cart></Cart>
            },
            {
                path: '/dashboard/reservation',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },


            // admin related routes
            {
                path:"/dashboard/users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
              
            },
            {
                path: "/dashboard/manageItems",
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path:'/dashboard/updateItem/:id',
                element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
            }
        ]
    }
])


export default router; 