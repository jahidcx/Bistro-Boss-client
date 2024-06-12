import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle";
import useCart from "../../../Hook/useCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = UseAxiosSecure();


    const totalPrice = cart.reduce((total, item) => {
        return total + item.price
    }, 0)


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <SectionTitle
                subHeading={'My Cart'}
                heading={'WANNA ADD MORE?'}
            ></SectionTitle>
            <div className="">
                <div className="flex justify-evenly ">
                    <h3 className="text-3xl font-semibold ">Total Orders: {cart.length}</h3>
                    <h3 className="text-3xl font-semibold ">Total Price: ${totalPrice}</h3>
                    {cart.length ?
                        <Link to='/dashboard/reservation'><button className="btn bg-[#D1A054] border-none text-white text-xl ">Pay</button></Link> :
                        <button disabled className="btn bg-[#D1A054] border-none text-white text-xl ">Pay</button>
                    }
                </div>
                <div className="mx-40 mt-5">

                    <div className="overflow-x-auto">
                        <table className="table mb-16">
                            {/* head */}
                            <thead className="bg-[#D1A054] text-white text-lg">
                                <tr className="">
                                    <th>
                                        #
                                    </th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => <tr key={item._id} className="text-xl">
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>${item.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn bg-[#B91C1C] text-xl text-white"><RiDeleteBin6Line /></button>
                                        </th>
                                    </tr>)
                                }



                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;