import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { FaCalendar, FaCartShopping, FaRegCalendar } from "react-icons/fa6";
import { MdMenu, MdOutlineRateReview, MdPayment } from "react-icons/md";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-72 min-h-screen bg-[#D1A054]">
                <ul className="menu text-lg font-semibold uppercase">
                    <li>
                        <NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment"> <MdPayment /> Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"><FaCartShopping></FaCartShopping> My cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"><MdOutlineRateReview /> Add review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking"><FaRegCalendar /> My booking</NavLink>
                    </li>
                    <div className="divider "></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><MdMenu></MdMenu> Menu</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;