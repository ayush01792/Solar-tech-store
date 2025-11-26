import React, { useEffect, useState } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import axios from "axios"
import cookie from "js-cookie";
import routingApi from './routing';
import { toast } from 'react-toastify';
import { useCart } from '../Pages/CartProvider';

function Header() {
    const getCookieUser = cookie.get("userInfo");
    const userInfo = getCookieUser ? JSON.parse(getCookieUser) : null;

    const { cartCount, setCartCount } = useCart();
    const navigate = useNavigate();

    const fetchCartData = async () => {
        if (userInfo?.token) {
            try {
                const res = await axios.get(routingApi.getAllCart.url, {
                    headers: {
                        Authorization: `Bearer ${userInfo?.token}`,
                    },
                });
                if (res.data.status === 200) {
                    setCartCount(res.data.body.length);
                }
            } catch (error) {
                console.error("Error fetching cart data", error);
            }
        }
    };

    useEffect(() => {
        fetchCartData();
    }, [userInfo]);

    const handleLogout = () => {
        cookie.remove("userInfo");
        toast.success("Logout Successfully");
        window.location.reload()
        navigate("/");
    };
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // update every second

        return () => clearInterval(intervalId); // cleanup
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });
    };
    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-dark p-0">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <small className="fa fa-map-marker-alt text-primary me-2" />
                            <small>Mohali SAS nagar , Punjab</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <small className="far fa-clock text-primary me-2" />
                            <small> Time: {formatTime(currentTime)}</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <small className="fa fa-phone-alt text-primary me-2" />
                            <small>+012 345 6789</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-twitter" /></a>
                            <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href><i className="fab fa-linkedin-in" /></a>
                            <a className="btn btn-square btn-link rounded-0" href><i className="fab fa-instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <Link to="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                    <h2 className="m-0 text-primary">Solartec</h2>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to="/" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}>Home</NavLink>
                        <NavLink to="/About" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}>About</NavLink>
                        <NavLink to="/Service" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}>Service</NavLink>
                        <NavLink to="/Project" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}>Project</NavLink>
                        <NavLink to="/Contact" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}>Contact</NavLink>

                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu bg-light m-0">
                                <NavLink to="/Features" className={({ isActive }) => `dropdown-item ${isActive ? "active" : ""}`}>Features</NavLink>
                                <NavLink to="/Quote" className={({ isActive }) => `dropdown-item ${isActive ? "active" : ""}`}>Free Quote</NavLink>
                                <NavLink to="/Team" className={({ isActive }) => `dropdown-item ${isActive ? "active" : ""}`}>Our Team</NavLink>
                                <NavLink to="/Testimonial" className={({ isActive }) => `dropdown-item ${isActive ? "active" : ""}`}>Testimonial</NavLink>
                                <NavLink to="/Page404" className={({ isActive }) => `dropdown-item ${isActive ? "active" : ""}`}>404 Page</NavLink>

                            </div>
                        </div>
                        {/* <Link to="/Contact" className="nav-item nav-link">Contact</Link> */}
                        {userInfo ?
                            <>
                                {/* <li><Link onClick={Logout} class="nav-item nav-link">Logout</Link></li> */}
                                {/* <Link onClick={handleLogout} class="nav-item nav-link ">Logout</Link>
                                <Link to={"/ProductPage"} class="nav-item nav-link ">Products</Link>
                                <Link to={"/MyOrders"} class="nav-item nav-link ">My Orders</Link> */}
                                <Link onClick={handleLogout} class="nav-item nav-link ">Logout</Link>

                                <NavLink
                                    to="/ProductPage"
                                    className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
                                >
                                    Products
                                </NavLink>

                                <NavLink
                                    to="/MyOrders"
                                    className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}
                                >
                                    My Orders
                                </NavLink>

                            </>
                            :
                            <>
                                {/* <Link to="/Login/" class="nav-item nav-link ">Login</Link>
                                <Link to="/register/" class="nav-item nav-link ">Register</Link> */}
                                <NavLink to="/Login" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}>Login</NavLink>
                                <NavLink to="/register" className={({ isActive }) => `nav-item nav-link ${isActive ? "active" : ""}`}>Register</NavLink>
                            </>
                        }
                    </div>
                    {userInfo ?
                        // <Link to={"/CartPage"}>
                        //     <div style={{ marginRight: "20px" }}>
                        //         <i className="fa fa-shopping-cart ms-3 position-relative" />
                        //         <span className="position-absolute top-30  start-30 translate-middle badge rounded-pill bg-danger">


                        //             {cartCount >= 0 && (
                        //                 <span className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                        //                     {cartCount > 0 ? cartCount : '0'}
                        //                 </span>
                        //             )}


                        //         </span>
                        //     </div>
                        // </Link> : ""
                        <NavLink to="/CartPage" className="nav-item nav-link" style={{ marginRight: "20px" }}>
                            <div>
                                <i className="fa fa-shopping-cart ms-3 position-relative" />
                                <span className="position-absolute top-30 start-30 translate-middle badge rounded-pill bg-danger">
                                    {cartCount >= 0 && (
                                        <span className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                                            {cartCount > 0 ? cartCount : '0'}
                                        </span>
                                    )}
                                </span>
                            </div>
                        </NavLink> : ""
                    }


                </div>
            </nav>
            {/* Navbar End */}
        </>
    )
}

export default Header