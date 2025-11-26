import React from 'react'
import TestimonialCarousel from '../Component/TestimonialCarousel'

function Testimonial() {
    return (
        <>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Testimonial Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h6 className="text-primary">Testimonial</h6>
                        <h1 className="mb-4">What Our Clients Say!</h1>
                    </div>
                    <TestimonialCarousel/>
                </div>
            </div>
            {/* Testimonial End */}
        </>
    )
}

export default Testimonial