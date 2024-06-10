import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../Hook/useMenu";
import { FaPenToSquare } from "react-icons/fa6";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = UseAxiosSecure();

    const handleItemDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                    });
                }

            }
        });

    }

    return (
        <div>
            <SectionTitle
                heading={"Manage All Items"}
                subHeading={"Hurry Up"}
            ></SectionTitle>
            <div className="">
                <div className="flex justify-evenly ">
                    <h3 className="text-3xl font-semibold ">Total Orders: {menu.length}</h3>

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
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menu.map((item, index) => <tr key={item._id} className="text-xl">
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
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <td>
                                                <button className="btn bg-[#D1A054] text-xl text-white"><FaPenToSquare /></button>
                                            </td>
                                        </Link>
                                        <th>
                                            <button onClick={() => handleItemDelete(item)} className="btn bg-[#B91C1C] text-xl text-white"><RiDeleteBin6Line /></button>
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

export default ManageItems;