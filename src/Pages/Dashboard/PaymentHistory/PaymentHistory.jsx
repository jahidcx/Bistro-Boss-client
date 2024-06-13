import { useContext } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";


const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
   

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            console.log(res.data);
            return res.data;
        }
    })
    return (
        <div>
            <SectionTitle subHeading={"At A Glance"} heading={"Payment History"}></SectionTitle>
            <div className="max-w-4xl mx-auto">
                {/* <h2 className="text-3xl">total payment:{payments.length}</h2> */}
                <h2 className="text-3xl">Total payments:{payments.length}</h2>

                <div className=" mt-5">

                    <div className="">
                        <table className="table mb-16">
                            {/* head */}
                            <thead className="bg-[#D1A054] text-white text-lg">
                                <tr className="">
                                    <th>
                                        #
                                    </th>
                                    <th>Email</th>
                                    <th>Transaction ID</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments.map((payment, index) => <tr key={payment._id} className="text-xl">
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                           {payment.email}
                                        </td>
                                        <td>
                                            {payment.transactionId}
                                        </td>
                                        <td>${payment.price}</td>
                                        <td>{payment.date}</td>
                                        <td>{payment.status}</td>
                                        
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

export default PaymentHistory;