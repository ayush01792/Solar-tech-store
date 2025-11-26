import React, { useState } from 'react'
import axios from 'axios';

export default function Contact() {
    const [userdata, setuserdata] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // ...................................

    // const userContact = (e) => {
    //     e.preventDefault();

    //     axios({
    //         method: "post",
    //         url: "http://localhost:5000/register",
    //         data: formdata,
    //     }).then((res) => {
    //         // window.alert(res.data);
    //         if(res.data.status==true){
    //             return navigate("/login")
    //         }else{
    //             return window.alert(res.data.message)
    //         }
    //     })


    //     // navigate("/login")
    // }


    //.....store data in states.....
    const onhandle = (e) => {

        setuserdata({
            ...userdata,
            [e.target.name]: e.target.value
        })

    }
    console.log(userdata)

    // ......send data to backend.........
    const contactData = (e) => {
        e.preventDefault();

        axios({
            method: "post",
            url: "http://localhost:5000/contact",
            data: userdata,
        }).then((res) => {
            window.alert(res.data);
            if(!res.data){
               console.log("data not found")
            }else{
                return window.alert("contact login succesful")
            }
        })


        // navigate("/login")
    }
    // const contactData = async (e) => {
    //     e.preventDefault();

    //     const { name, email, subject, message } = userdata;
    //     const res = await fetch('/contact', {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name, email, subject, message
    //         })
    //     })
    //     const data=await res.userdata;
    //     if(!data){
    //         console.log("messgae not send")
    //     }else{
    //         alert("messsage send");
    //     }
    // }
    return (
        <>
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid bg-dark bg-img p-5 mb-5">
                <div class="row">
                    <div class="col-12 text-center">
                        <h1 class="display-4 text-uppercase text-white">Contact Us</h1>
                        <a href="">Home</a>
                        <i class="far fa-square text-primary px-2"></i>
                        <a href="">Contact</a>
                    </div>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Contact Start --> */}
            <div class="container-fluid contact position-relative px-5" style={{ marginTop: "90px" }}>
                <div class="container">
                    <div class="row g-5 mb-5">
                        <div class="col-lg-4 col-md-6">
                            <div class="bg-primary border-inner text-center text-white p-5">
                                <i class="bi bi-geo-alt fs-1 text-white"></i>
                                <h6 class="text-uppercase my-2">Our Office</h6>
                                <span>Mohali Sas Nagar, Punjab</span>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="bg-primary border-inner text-center text-white p-5">
                                <i class="bi bi-envelope-open fs-1 text-white"></i>
                                <h6 class="text-uppercase my-2">Email Us</h6>
                                <span>info@example.com</span>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="bg-primary border-inner text-center text-white p-5">
                                <i class="bi bi-phone-vibrate fs-1 text-white"></i>
                                <h6 class="text-uppercase my-2">Call Us</h6>
                                <span>+012 345 6789</span>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <form method='post'>
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control bg-light border-0 px-4" placeholder="Your Name" style={{ height: "55px" }} name='name' value={userdata.name} onChange={onhandle} />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="email" class="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: "55px" }} name='email' value={userdata.email} onChange={onhandle} />
                                    </div>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control bg-light border-0 px-4" placeholder="Subject" style={{ height: "55px" }} name='subject' value={userdata.subject} onChange={onhandle} />
                                    </div>
                                    <div class="col-sm-12">
                                        <textarea class="form-control bg-light border-0 px-4 py-3" rows="4" placeholder="Message" name='message' value={userdata.message} onChange={onhandle}></textarea>
                                    </div>
                                    <div class="col-sm-12">
                                        <button class="btn btn-primary border-inner w-100 py-3" type="submit" onClick={contactData}>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}

        </>
    )
}
