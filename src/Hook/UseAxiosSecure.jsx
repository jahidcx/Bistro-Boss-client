import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})
const UseAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext);

    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token = localStorage.getItem('accessToken');
        // console.log("req stopped by config", token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use((response) => {
        return response;
    },async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptors', status);
        // for 401 or 403 logout the user and move to login page
        if (status === 401 || status === 403) {
            await logOut(); 
            navigate('/login')
        }
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default UseAxiosSecure;