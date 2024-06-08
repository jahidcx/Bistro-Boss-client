import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                // console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post("/users", userInfo)
                .then(res=>{
                    console.log(res.data);
                    navigate('/')
                })
            })
    }
    return (
        <div className="mx-6 flex flex-col items-center mb-6">
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-outline rounded-full"> <FaGoogle></FaGoogle> </button>
        </div>
    );
};

export default SocialLogin;