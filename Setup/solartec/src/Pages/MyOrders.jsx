import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cookie from 'js-cookie';
import routingApi from '../Component/routing';

function MyOrders() {
    const userInfo = cookie.get('userInfo');
    const token = userInfo ? JSON.parse(userInfo) : null;
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const getOrders = async () => {
        try {
            const response = await axios.get(routingApi.orderGetAll.url, {
                headers: {
                    Authorization: `Bearer ${token?.token}`,
                },
            });
            setData(response.data.body);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <>
            <section className="bg-gray-100 py-8">
                <div className="container mx-auto text-center">
                    <p className="text-lg text-gray-600">All Orders</p>
                    <h1 className="text-3xl font-bold">My Orders</h1>
                </div>
            </section>

            <div className="container mx-auto p-5">
    <div className="bg-white shadow-lg rounded-lg p-6 overflow-auto">
        {/* Back Button */}
        <button
            onClick={() => navigate(-1)}
            className="mb-4 px-4 py-2 bg-blue-600  rounded hover:bg-blue-700"
        >
            Back
        </button>

        {/* Invoice Title */}
        <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold">Invoice</h2>
        </div>

        {data.length > 0 ? (
            <div className="overflow-x-auto w-full">
                <table className="min-w-[1200px] w-full border border-gray-300 text-sm">
                    {/* Table Head */}
                    <thead className="bg-gray-800  uppercase text-sm tracking-wider">
                        <tr>
                            {[
                                'S.no', 'Order ID', 'Name', 'Email', 'Mobile', 'Address',
                                'Date', 'Time', 'Product Name', 'Quantity', 'Price',
                                'Sub Total', 'Shipping Price', 'Total'
                            ].map((header, index) => (
                                <th key={index} className="px-4 py-3 border border-gray-400 text-center whitespace-nowrap">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {data.map((order, index) => (
                            <tr key={order._id} className="border-b border-gray-300 even:bg-gray-50">
                                <td className="px-4 py-2 border border-gray-400 text-center">{index + 1}</td>
                                <td className="px-4 py-2 border border-gray-400 text-center whitespace-nowrap">{order.orderId}</td>
                                <td className="px-4 py-2 border border-gray-400">{order.name}</td>
                                <td className="px-4 py-2 border border-gray-400 break-all">{order.email}</td>
                                <td className="px-4 py-2 border border-gray-400 text-center whitespace-nowrap">{order.mobile}</td>
                                <td className="px-4 py-2 border border-gray-400 break-words">{order.address}</td>
                                <td className="px-4 py-2 border border-gray-400 text-center whitespace-nowrap">{new Date(order.createdAt).toLocaleDateString()}</td>
                                <td className="px-4 py-2 border border-gray-400 text-center whitespace-nowrap">{new Date(order.createdAt).toLocaleTimeString()}</td>
                                <td className="px-4 py-2 border border-gray-400 break-words">
                                    {order.products?.map(product => product?.productId?.name || 'Unknown').join(', ')}
                                </td>
                                <td className="px-4 py-2 border border-gray-400 text-center">{order?.quantity}</td>
                                <td className="px-4 py-2 border border-gray-400 text-center break-words">
                                    {order.products?.map(product => `₹ ${product?.productId?.sellingPrice || 'Unknown'}`).join(', ')}
                                </td>
                                <td className="px-4 py-2 border border-gray-400 text-center">₹ {order.totalAmount}</td>
                                <td className="px-4 py-2 border border-gray-400 text-center">₹ 20</td>
                                <td className="px-4 py-2 border border-gray-400 text-center">₹ {order.totalAmount + 20}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) : (
            <p className="text-center text-gray-600">There are no orders yet.</p>
        )}
    </div>
</div>


        </>
    );
}

export default MyOrders;
