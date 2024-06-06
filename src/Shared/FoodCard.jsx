import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../Hook/UseAxiosSecure";
import useCart from "../Hook/useCart";

const FoodCard = ({ item }) => {
    const { image, recipe, name, price, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();
    const [, refetch]= useCart();

    const handleAddToCart = () => {

        if (user && user.email) {
            //  todo
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: `${name} have been added to cart`,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        // refetch cart to update the cart count 
                        refetch();
                    }

                })
        }
        else {
            Swal.fire({
                title: "You are not logged in!",
                text: "You need to logged in!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,login !"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute bg-[#111827] top-5 right-5 text-white px-3 py-1 ">${price}</p>
            <div className="card-body">
                <h2 className="text-center text-2xl font-semibold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={ handleAddToCart} className="btn text-[#BB8506] border-0 hover:bg-black border-b-4 border-[#BB8506] uppercase text-lg">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;