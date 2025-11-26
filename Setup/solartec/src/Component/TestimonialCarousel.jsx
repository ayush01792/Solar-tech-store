import React from 'react'
import OwlCarousel from 'react-owl-carousel'


function TestimonialCarousel() {
    var settings = {
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    };
    return (
        <>
            <OwlCarousel className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s" loop margin={10} nav  {...settings}>
                <div class="testimonial-item text-center" >
                    <div className="testimonial-img position-relative">
                        <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-1.jpg" />
                        <div className="btn-square bg-primary rounded-circle">
                            <i className="fa fa-quote-left text-white" />
                        </div>
                    </div>
                    <div className="testimonial-text text-center rounded p-4">
                       <p>There was a quiet moment filled with pain and reflection. Great effort and work were required, and each step felt significant. Everything came together in time, bringing clarity and understanding to the situation.</p>

                        <h5 className="mb-1">Client Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>

                <div class="testimonial-item text-center" >
                    <div className="testimonial-img position-relative">
                        <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-2.jpg" />
                        <div className="btn-square bg-primary rounded-circle">
                            <i className="fa fa-quote-left text-white" />
                        </div>
                    </div>
                    <div className="testimonial-text text-center rounded p-4">
                     <p>There was a brief period of silence and reflection. Pain was felt deeply, and every moment seemed significant. Effort and hard work were required, and with time, clarity and understanding emerged.</p>

                        <h5 className="mb-1">Client Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>

                <div class="testimonial-item text-center" >
                    <div className="testimonial-img position-relative">
                        <img className="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-3.jpg" />
                        <div className="btn-square bg-primary rounded-circle">
                            <i className="fa fa-quote-left text-white" />
                        </div>
                    </div>
                    <div className="testimonial-text text-center rounded p-4">
                      <p>There was a brief moment of stillness, followed by deep reflection. Pain and effort were present, and each step was filled with meaning. Time passed, and clarity emerged as everything fell into place.</p>

                        <h5 className="mb-1">Client Name</h5>
                        <span className="fst-italic">Profession</span>
                    </div>
                </div>
            </OwlCarousel>;
        </>
    )
}

export default TestimonialCarousel