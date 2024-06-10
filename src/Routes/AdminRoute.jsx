import { useContext } from "react";
import useAdmin from "../Hook/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading || isAdminLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default AdminRoute;