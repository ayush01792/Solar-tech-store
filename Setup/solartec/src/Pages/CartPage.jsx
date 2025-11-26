import React, { useEffect, useState } from "react";
import axios from "axios"
import cookie from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import routingApi from "../Component/routing";
const CartPage = () => {
    const userInfo = cookie.get("userInfo");
    const token = userInfo ? JSON.parse(userInfo) : null;
    const [loading, setLoading] = useState(true)

    const [usecartdata, setUsecartdata] = useState([])
    console.log(usecartdata, "usecartdata")
    const navigate = useNavigate()

    useEffect(() => {
        if (!token?.token) {
            navigate("/")
        }
        else {
            axios.get(routingApi.getAllCart.url, {
                headers: {
                    'Authorization': `Bearer ${token?.token}`
                }
            }).then((res) => {
                setUsecartdata(res.data.body || [])
                setLoading(false)

            })
        }
    }, [token?.token])

    const handleIncrement = async (id, currentQuantity) => {
        const newQuantity = currentQuantity + 1;
        try {

            const response = await axios.put(`${routingApi.updateCart.url}${id}`, {
                quantity: newQuantity,
            }, {
                headers: {
                    'Authorization': `Bearer ${token?.token}`
                }
            });

            if (response.status === 200) {
                // Update the local state
                const updatedCart = usecartdata.map((item) =>
                    item._id === id ? { ...item, quantity: newQuantity } : item
                );
                setUsecartdata(updatedCart);
            }
        } catch (error) {
            console.error("Error updating quantity", error);
        }
    };

    const handleDecrement = async (id, currentQuantity) => {
        if (currentQuantity <= 1) return; // Ensure quantity doesn't go below 1
        const newQuantity = currentQuantity - 1;
        try {
            const response = await axios.put(`${routingApi.updateCart.url}${id}`, {
                quantity: newQuantity,
            }, {
                headers: {
                    'Authorization': `Bearer ${token?.token}`
                }
            });
            if (response.status === 200) {
                // Update the local state
                const updatedCart = usecartdata.map((item) =>
                    item._id === id ? { ...item, quantity: newQuantity } : item
                );
                setUsecartdata(updatedCart);
            }
        } catch (error) {
            console.error("Error updating quantity", error);
        }
    };
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${routingApi.deleteSingleCartItem.url}${id}`, {
                headers: {
                    'Authorization': `Bearer ${token?.token}`
                }
            });

            if (response.status === 200) {
                const updatedCart = usecartdata.filter((item) => item._id !== id);
                window.location.reload()
                setUsecartdata(updatedCart);
            }
        } catch (error) {
            console.error("Error updating quantity", error);
        }
    };


    const subTotal = usecartdata?.reduce((total, item) => {
        return total + (item?.quantity * item?.productId?.sellingPrice);
    }, 0);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b bg-gray-100">
                            <th className="p-3">Product</th>
                            <th className="p-3">Add Product</th>
                            <th className="p-3">Price</th>
                            <th className="p-3">Quantity</th>
                            <th className="p-3">Total</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usecartdata.length > 0 ? (
                            usecartdata.map((e) => (
                                <tr key={e._id} className="border-b hover:bg-gray-50">
                                    <td className="p-3 flex items-center gap-3">
                                        <img
                                            src={e?.productId?.prevImg}
                                            alt={e?.productId?.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <span className="text-gray-700 font-medium">{e?.productId?.name}</span>
                                    </td>
                                    <td className="p-3 flex items-center">
                                        <button
                                            className="bg-gray-300 px-3 py-1 rounded-l transition hover:bg-gray-400"
                                            onClick={() => handleDecrement(e?._id, e?.quantity)}
                                        >
                                            -
                                        </button>
                                        <span className="px-4 text-gray-800">{e?.quantity}</span>
                                        <button
                                            className="bg-gray-300 px-3 py-1 rounded-r transition hover:bg-gray-400"
                                            onClick={() => handleIncrement(e?._id, e?.quantity)}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className="p-3 text-gray-700">₹{e?.productId?.sellingPrice}</td>
                                    <td className="p-3 text-gray-700">₹{e?.quantity}</td>
                                    <td className="p-3 text-gray-700">₹{e?.productId.sellingPrice * e?.quantity}</td>
                                    <td className="p-3 text-red-500 cursor-pointer transition hover:text-red-700" onClick={() => { handleDelete(e?._id) }}>
                                        <i className="fas fa-trash"></i>
                                    </td>
                                </tr>
                            ))
                        ) : (

                            <p className="text-center">Cart is empty</p>
                        )}
                    </tbody>
                </table>
                <div className="flex justify-between items-center mt-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Total: ₹{subTotal}
                    </h3>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg transition hover:bg-blue-700">
                        {usecartdata.length > 0 ?
                            <Link to="/CheckoutPage" className="boxed-btn black">
                                Check Out
                            </Link> :
                            <Link className="boxed-btn">
                                <button >

                                    Check Out
                                </button>
                            </Link>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
