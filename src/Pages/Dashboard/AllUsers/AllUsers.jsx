import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = UseAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin !"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Admin!",
                                text: `${user.name} is admin now!`,
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    const handleDeleteUser = user => {

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
                axiosSecure.delete(`/users/${user._id}`)
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
                subHeading={"How many?"}
                heading={"MANAGE ALL USERS"}
            ></SectionTitle>
            <div>
                <h3 className="text-3xl font-semibold ml-36">Total Orders: {users.length}</h3>
                <div className="mx-40 mt-5">

                    <div className="overflow-x-auto">
                        <table className="table mb-16">
                            {/* head */}
                            <thead className="bg-[#D1A054] text-white text-lg">
                                <tr className="">
                                    <th>
                                        #
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => <tr key={user._id} className="text-xl">
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            {user.name}
                                        </td>
                                        <td>
                                            {user.email}
                                        </td>
                                        <td>
                                            {
                                                user.role === 'admin' ? "Admin" : <button onClick={() => handleMakeAdmin(user)} className="btn bg-[#D1A054] text-xl text-white"><FaUsers /></button>
                                            }
                                        </td>
                                        <th>
                                            <button onClick={() => handleDeleteUser(user)} className="btn bg-[#B91C1C] text-xl text-white"><RiDeleteBin6Line /></button>
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

export default AllUsers;