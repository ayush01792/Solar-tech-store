import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartProvider";
import cookie from "js-cookie";
import axios from "axios"
import routingApi from "../Component/routing";
import { toast } from "react-toastify";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const navigate = useNavigate();
    const { setCartCount } = useCart();

        const getCookieUser = cookie.get("userInfo");
        const userInfo = getCookieUser ? JSON.parse(getCookieUser) : null;

    const fetchData = async () => {
        try {
            const res = await axios.get(routingApi.getAllProducts.url);
            setProducts(res.data.body);
            setLoading(false); // Stop loading after data is fetched
        } catch (err) {
            console.log(err);
            setLoading(false); // Stop loading in case of an error
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddToCart = async (productId) => {
        try {
            if (!userInfo) {
                toast.error('Please login first');
                return;
            }

            const cartResponse = await axios.get(routingApi.getAllCart.url, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            });

            let cartItems = cartResponse.data.body;
            const existingProduct = cartItems.find(
                (item) => item?.productId?._id === productId
            );
            if (existingProduct) {
                const updatedQuantity = existingProduct.quantity + 1;

                await axios.put(
                    `${routingApi.updateCart.url}${existingProduct._id}`,
                    {
                        quantity: updatedQuantity,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${userInfo.token}`,
                        },
                    }
                );
                toast.success('Quantity updated in your cart');
            } else {
                await axios.post(
                    routingApi.addToCart.url,
                    {
                        productId,
                        quantity: 1,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${userInfo.token}`,
                        },
                    }
                );
                toast.success('Successfully added to your cart');
            }

            const updatedCartResponse = await axios.get(routingApi.getAllCart.url, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            });
            if (updatedCartResponse.data.status === 200) {
                setCartCount(updatedCartResponse.data.body.length);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };


    return (
        <div className="mt-20 mb-20">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
            <div className="container mx-auto px-4 ">
                <div className="d-flex flex-wrap gap-6 justify-center">
                  {products?.map((e)=>(
                      <div key={e?._id} className="border p-4 rounded-lg shadow-md" style={{ height: "300px", width: "200px", marginRight: "20px" }}>
                      <div className="text-left" >
                          <div
                              className="cursor-pointer"
                          >
                              <img
                                  src={e?.image}
                                  alt="Product"
                                  style={{ height: "100px" ,width:"150px"}}
                              />
                          </div>
                          <h3 className="text-lg font-semibold mt-2">{e?.name}</h3>
                          <p className="text-gray-600 text-sm">
                              <span className="font-medium">Per Kg</span> ₹ {e?.sellingPrice}
                          </p>
                          <button
                              className="mt-2 px-1 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
                              onClick={()=>handleAddToCart(e?._id)}
                          >
                              <i className="fas fa-shopping-cart mr-1"></i> Add to Cart
                          </button>
                      </div>

                  </div>
                  ))}

                </div>
            </div>
        </div>
    );
};

export default ProductPage;
