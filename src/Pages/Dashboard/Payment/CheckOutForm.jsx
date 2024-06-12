import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import useCart from "../../../Hook/useCart";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    const [cart,refetch] = useCart();

    // console.log(cart);


    const totalPrice = cart.reduce((total, item) => total + (item.price), 0);
    // console.log(totalPrice)


    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('payment error', error);
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setError('');
        }


        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'annonymous',
                    name: user?.displayName || 'annonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error', confirmError)
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);

                // now save the payment in db
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // convert utc date . use moment js
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: 'pending'

                }

                const res = await axiosSecure.post('/payments', payment);
                // console.log(res.data);
                refetch();
                if(res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank You for your order",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }

            }
        }

    }
    return (
        <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',

                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary mt-8 " type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-700">{error}</p>
            {transactionId && <p className="text-green-700">Your transaction ID: {transactionId}</p>}

        </form >
    );
};

export default CheckOutForm;