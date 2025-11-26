import React from 'react'
import CountUp from 'react-countup'


function Features() {
    return (
        <>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Features</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Features</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Feature Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-4">
                                <div className="btn-lg-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-users text-white" />
                                </div>
                                <h1 className="mb-0" data-toggle="counter-up"><CountUp end={3453} enableScrollSpy /></h1>
                            </div>
                            <h5 className="mb-3">Happy Customers</h5>
<span>Time passed quickly, and emotions ran deep. There was pain, but it was endured in silence.</span>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex align-items-center mb-4">
                                <div className="btn-lg-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-check text-white" />
                                </div>
                                <h1 className="mb-0" data-toggle="counter-up"><CountUp end={4234} enableScrollSpy /></h1>
                            </div>
                            <h5 className="mb-3">Project Done</h5>
<span>It was a quiet moment. There was pain, but it was calmly endured.</span>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <div className="d-flex align-items-center mb-4">
                                <div className="btn-lg-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-award text-white" />
                                </div>
                                <h1 className="mb-0" data-toggle="counter-up"><CountUp end={3123} enableScrollSpy /></h1>
                            </div>
                            <h5 className="mb-3">Awards Win</h5>
<span>It was a brief moment of silence. Great pain and sorrow were felt.</span>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <div className="d-flex align-items-center mb-4">
                                <div className="btn-lg-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-users-cog text-white" />
                                </div>
                                <h1 className="mb-0" data-toggle="counter-up"><CountUp end={1831} enableScrollSpy /></h1>
                            </div>
                            <h5 className="mb-3">Expert Workers</h5>
<span>It was a short moment of silence. The pain was deep and real.</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature Start */}
            {/* Feature Start */}
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container feature px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="p-lg-5 ps-lg-0">
                                <h6 className="text-primary">Why Choose Us!</h6>
                                <h1 className="mb-4">Complete Commercial &amp; Residential Solar Systems</h1>
                               <p className="mb-4 pb-2">
There was a short moment of silence. Pain and emotions were strong. Every word carried meaning, and in the quiet, everything felt more real.
</p>

                                <div className="row g-4">
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-lg-square bg-primary rounded-circle">
                                                <i className="fa fa-check text-white" />
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-0">Quality</p>
                                                <h5 className="mb-0">Services</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-lg-square bg-primary rounded-circle">
                                                <i className="fa fa-user-check text-white" />
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-0">Expert</p>
                                                <h5 className="mb-0">Workers</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-lg-square bg-primary rounded-circle">
                                                <i className="fa fa-drafting-compass text-white" />
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-0">Free</p>
                                                <h5 className="mb-0">Consultation</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-lg-square bg-primary rounded-circle">
                                                <i className="fa fa-headphones text-white" />
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-0">Customer</p>
                                                <h5 className="mb-0">Support</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature End */}
        </>
    )
}

export default Features