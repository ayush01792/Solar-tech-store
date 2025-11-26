import React from 'react'
import { useNavigate } from 'react-router-dom'

function SubService1() {
    const navigate=useNavigate()
    const backFun=()=>{
        navigate(-1)
    }
    return (
        <>
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container about px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div
                            className="col-lg-6 ps-lg-0 wow fadeIn"
                            data-wow-delay="0.1s"
                            style={{ minHeight: 400 }}
                        >
                            <div className="position-relative h-100">
                                <img
                                    className="position-absolute img-fluid w-100 h-100"
                                    src="img/img-600x400-2.jpg"
                                    style={{ objectFit: "cover" }}
                                    alt="Solar Detail"
                                />
                            </div>
                        </div>
                        <div
                            className="col-lg-6 about-text py-5 wow fadeIn"
                            data-wow-delay="0.5s"
                        >
                            <div className="p-lg-5 pe-lg-0">
                                <h6 className="text-primary">Wind Turbines</h6>
                                <h1 className="mb-4">Efficient &amp; Clean Energy Solutions</h1>
                                <p>
                                    Our solar panels offer high-efficiency energy conversion, reducing
                                    your electricity bills and carbon footprint. With over 25 years of
                                    experience, we provide expert installation and maintenance services
                                    for homes and businesses.
                                </p>
                                <p>
                                    <i className="fa fa-check-circle text-primary me-3" />
                                    High Energy Efficiency
                                </p>
                                <p>
                                    <i className="fa fa-check-circle text-primary me-3" />
                                    Reliable Maintenance Support
                                </p>
                                <p>
                                    <i className="fa fa-check-circle text-primary me-3" />
                                    Eco-Friendly Materials
                                </p>
                                <button
                                  
                                    className="btn btn-primary rounded-pill py-3 px-5 mt-3"
                                    onClick={backFun}
                                >
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SubService1