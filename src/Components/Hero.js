import React from 'react'
import './Hero.css'

function Hero(props) {
    return (
        <>
            <section id="hero" className="hero">
                <div className="container p-4 ">
                        <div className="row py-2 px-5">
                            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 m-auto ">
                                <h1>{props.value}</h1>
                                <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                                <div className="h-btn pt-2">
                                    <button className="hero-btn" href="#">Contact Us</button>
                                    <button className="hlper-btn" href="#">Our Service</button>
                                </div>
                            </div>
                            <div className=" col-xl-4 col-lg-5 col-md-10 col-sm-10 col-10 d-flex justify-content-center m-auto ">
                                <img src="../images/img-1.png" alt="img" className='hero_img img-fluid' />
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Hero