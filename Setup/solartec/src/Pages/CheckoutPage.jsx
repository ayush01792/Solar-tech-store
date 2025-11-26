import React, { useEffect, useState } from "react";
import axios from "axios"
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import routingApi from "../Component/routing";
const CheckoutPage = () => {

    const token = JSON.parse(cookie.get("userInfo"));
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [product, setProduct] = useState([]);
    const [orderCreate, setOrderCreate] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        products: []
    });
    const navigate = useNavigate();

    // Updated handleChangeOfOrder function
    const handleChangeOfOrder = (e) => {
        setOrderCreate({ ...orderCreate, [e.target.name]: e.target.value });
    };

    // Function to calculate subtotal
    const calculateSubtotal = (cartItems) => {
        return cartItems.reduce((total, item) => total + (item.quantity * item.productId.sellingPrice), 0);
    };

    const handleSubmitOfOrder = async (e) => {
        e.preventDefault();
        try {
            const dataOfProductIds = cart?.map((items) => items?.productId?._id);
            const dataOfProductIdsFromProduct = product?.map((items) => items?._id);
            const commonProductIds = dataOfProductIdsFromProduct.filter(productId => dataOfProductIds.includes(productId));
            const totalQuantity = cart?.reduce((acc, item) => acc + item?.quantity, 0);

            const updateProducts = {
                ...orderCreate,
                products: commonProductIds,
                quantity: totalQuantity,
                totalAmount: subTotal // Ensure subTotal is calculated before this point
            };

            const res = await axios.post(routingApi.orderCreate.url, updateProducts, {
                headers: {
                    "Authorization": `Bearer ${token?.token}`
                }
            });

            setOrderCreate(res.data.body);
            await axios.delete(routingApi.deleteCart.url, {
                headers: {
                    "Authorization": `Bearer ${token?.token}`
                }
            });
            toast.success("Order is placed successfully");
            navigate("/");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    const getCartData = async () => {
        try {
            const data = await axios.get(routingApi.getAllCart.url, {
                headers: {
                    "Authorization": `Bearer ${token?.token}`
                }
            });
            setCart(data?.data?.body);
            const subtotal = calculateSubtotal(data?.data?.body);
            if (subtotal > 0) {
                setLoading(false); // Stop loading if subtotal is valid
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getProductData = async () => {
        try {
            const data = await axios.get(routingApi.getAllProducts.url, {
                headers: {
                    "Authorization": `Bearer ${token?.token}`
                }
            });
            setProduct(data?.data?.body);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCartData();
        getProductData();
    }, []);

    const subTotal = calculateSubtotal(cart); // Calculate subtotal

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                Checkout
            </h2>

            <div className="grid md:grid-cols-2 gap-8 d-flex " >
                {/* Left Section - User Info */}
                <form onSubmit={handleSubmitOfOrder}>

                    <div className="bg-white shadow-lg rounded-lg p-6 " >
                        <h3 className="text-xl font-semibold mb-4 text-gray-800" style={{ margin: "20px" }}>
                            Billing Details
                        </h3>
                        <div className="space-y-4" style={{ margin: "20px" }}>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                onChange={handleChangeOfOrder}
                                className="w-full p-3 border rounded focus:outline-blue-500"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                onChange={handleChangeOfOrder}
                                className="w-full p-3 border rounded focus:outline-blue-500"
                                required
                            />
                            <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder="Address"
                                onChange={handleChangeOfOrder}
                                className="w-full p-3 border rounded focus:outline-blue-500"
                                required
                            />
                            <input
                                type="number"
                                name="mobile"
                                id="address"
                                placeholder="Mobile"
                                onChange={handleChangeOfOrder}
                                className="w-full p-3 border rounded focus:outline-blue-500"
                                required
                            />
                            {/* <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="City"
                                className="w-full p-3 border rounded focus:outline-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="ZIP Code"
                                className="w-full p-3 border rounded focus:outline-blue-500"
                            />
                        </div>
                        <select className="w-full p-3 border rounded focus:outline-blue-500">
                            <option>Credit/Debit Card</option>
                            <option>UPI</option>
                            <option>Cash on Delivery</option>
                        </select> */}

                        </div>
                        <button className="w-full mt-4 bg-blue-600 text-black p-3 rounded-lg transition hover:bg-blue-700" style={{ margin: "20px" }}>
                            Place Order
                        </button>
                    </div>
                </form>

                {/* Right Section - Order Summary */}
                <div className="bg-white shadow-lg rounded-lg p-6 " style={{ width: "40%" }}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800" style={{ margin: "20px" }}>
                        Order Summary
                    </h3>


                    {cart?.map((e) => (


                        <div key={e.productId._id} className="space-y-4" style={{ margin: "20px" }}>
                            <div className="flex justify-between items-center border-b pb-2" >
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
                                        alt="Product"
                                        style={{ height: "50px", width: "50px", borderRadius: "20px" }}
                                    />
                                    <span className="text-gray-700">{e?.productId?.name} × ₹ {e?.quantity}</span>
                                </div>
                                <span className="text-gray-800 font-semibold">₹ {e?.quantity * e?.productId?.sellingPrice}</span>
                            </div>


                        </div>

                    ))}


                    <div className="flex justify-between mt-6 text-lg font-semibold" style={{ margin: "20px" }}>
                        <span>Total:</span>
                        <span>₹ {subTotal}</span>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
