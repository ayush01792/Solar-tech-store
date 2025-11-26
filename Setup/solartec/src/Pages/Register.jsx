import { useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import routingApi from '../Component/routing';
import { toast } from 'react-toastify';
export default function Register() {
    const [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    });
    const navigate = useNavigate();

   

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        let imageFile;


        if (name === "image" && files.length > 0) {
            imageFile = files[0];
        }

        setData((prevData) => ({
            ...prevData,
            [name]: name === "image" ? imageFile : value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("mobile", data.mobile);
            formData.append("password", data.password);

            // Check if the image is correctly appended
            if (data.image) {
                formData.append("image", data.image); // Only append if image exists
            } else {
                console.log("No image file selected");
            }

            // Log FormData for debugging
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }

            const res = await axios.post(`${routingApi.signUp.url}`, formData);
            toast.success(res.data.message);
            navigate("/Login");
        } catch (error) {
            console.log(error, "Error");
        }
    };

    return (
        <>
            {/* <!-- Page Header Start --> */}


            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">New User Registration</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item text-primary" aria-current="page">Registration</li>
                        </ol>
                    </nav>
                </div>
            </div>


            {/* <!-- Contact Start --> */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px;" }}>
                        <p className="fs-5 fw-medium text-primary">Register Us</p>
                        <h1 className="display-5 mb-5">If You Have Any Query, Please Contact Us</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h3 className="mb-4">Need a functional contact form?</h3>
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            {/* <form onSubmit={Onhandleform} method="post"> */}
                            <form onSubmit={handleSubmit} onChange={handleChange}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"
                                                name="name"
                                              />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"
                                                name="email"
                                               />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="phone" placeholder="Number"
                                                name='mobile'
                                                />
                                            <label for="phone">Number</label>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="subject" placeholder="password"
                                                name='password'
                                                />
                                            <label for="password">password</label>
                                        </div>
                                    </div>
                                    {/* <div className="col-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="city" placeholder="city"
                                                name='city'
                                                />
                                            <label for="city">city</label>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="state" placeholder="state"
                                                name='state'
                                              />
                                            <label for="state">state</label>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "200px;" }}
                                                name="message"
                                                value={formdata.message}
                                                onChange={OnchangeData}
                                            ></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div> */}
                                    <div className="col-12">
                                        <button className="btn btn-primary rounded-pill py-3 px-5" type="submit"  >Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <h3 className="mb-4">Contact Details</h3>
                            <div className="d-flex border-bottom pb-3 mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                                    <i className="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h6>Our Office</h6>
                                    <span>Mohali Sas nagar, Punjab</span>
                                </div>
                            </div>
                            <div className="d-flex border-bottom pb-3 mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h6>Call Us</h6>
                                    <span>+012 345 67890</span>
                                </div>
                            </div>
                            <div className="d-flex border-bottom-0 pb-3 mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle">
                                    <i className="fa fa-envelope text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h6>Mail Us</h6>
                                    <span>info@example.com</span>
                                </div>
                            </div>

                            <iframe className="w-100 rounded"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameborder="0" style={{ minHeight: "300px;" }} allowfullscreen="" aria-hidden="false"
                                tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}
        </>
    )
}
