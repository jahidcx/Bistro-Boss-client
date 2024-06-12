import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaHome, FaList, FaUsers, FaUtensils } from 'react-icons/fa';
import { FaCalendar, FaCartShopping, FaRegCalendar } from "react-icons/fa6";
import { MdMenu, MdOutlineRateReview, MdPayment } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { LuContact2 } from "react-icons/lu";
import useAdmin from "../Hook/useAdmin";


const Dashboard = () => {

    // todo: get admin value from database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-72 min-h-screen bg-[#D1A054]">
                <ul className="menu text-xl font-semibold uppercase">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils> Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems"> <FaList></FaList> Manage Items </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageBookings"><FaBook></FaBook> Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users"><FaUsers></FaUsers> All Users </NavLink>
                            </li>
                           
                        </> :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory"> <MdPayment /> Payment History</NavLink>
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
                            </>
                    }
                    <div className="divider "></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"><MdMenu></MdMenu> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop"><AiOutlineShopping /> Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"><LuContact2 /> Contact</NavLink>
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