import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate(); 
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const {createUser,updateUserProfile}= useContext(AuthContext);
    
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Successfully user created",
                showConfirmButton: false,
                timer: 1500
              });
              updateUserProfile(data.name, data.photoURL)
              .then(() => {
                console.log("user updated");
                reset(); 
              }).catch((error) => {
               console.log(error);
              });
              navigate("/"); 
        })
        .catch(error => console.log(error))
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0  max-w-sm shadow-2xl bg-base-100 w-1/2">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                                {errors.name && <span>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="url" placeholder="photo" {...register("photoURL", { required: true })} name="photoURL" className="input input-bordered" />
                                {errors.photoURL && <span>Photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
                                {errors.email && <span>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true, maxLength: 20,
                                    minLength: 6,
                                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p role="alert">Password is required</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p role="alert">Password must have one uppercase , one lowercase and one special character </p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p role="alert">Password must less than 20 characters </p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p role="alert">Password must be minimum 6 characters</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn bg-[#D1A054] text-white " type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center my-4 text-[#D1A054] font-bold'>Already Have an account ? <Link to='/login'>Go to Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;