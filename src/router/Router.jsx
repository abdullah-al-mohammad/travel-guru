import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/home/Home";
import Booking from "../pages/booking/Booking";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import PrivateRouter from "../privateRoute/PrivateRouter";
import Search from "../pages/search/Search";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/booking',
                element: <PrivateRouter><Booking></Booking></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <Register></Register>
            },
            {
                path:'/hotel',
                element: <PrivateRouter><Search></Search></PrivateRouter>,
                loader: () => fetch('hotel.json')
            }
        ]
    }
])

export default router