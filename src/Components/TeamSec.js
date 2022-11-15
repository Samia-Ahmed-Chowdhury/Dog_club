import React from 'react'
import "./TeamSec.css"
function TeamSec() {
    return (
        <section id="team_sec" className="team_sec my-5">
            <div className="container p-5 my-5 ">
                <div className="row py-4  ">
                    <div className="py-5 col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12 m-auto mb-5 ">
                        <h2>The vetcare team</h2>
                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    </div>
                </div>
                <div className="row py-4 px-5 ">
                    <div className="text-center col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-block m-auto">
                        <div className="card m-4" id="care_card">
                            <img src="images/img-6.png" className=" img-fluid " alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Jennifer Mullen</h5>
                                <p className="card-text">VETERINARY</p>
                                <div className='social_icon d-flex justify-content-evenly'>
                                    <img src="images/insta.png" className=" img-fluid " alt="img" />
                                    <img src="images/fb.png" className=" img-fluid " alt="img" />
                                    <img src="images/tw.png" className=" img-fluid " alt="img" />
                                    <img src="images/wats.png" className=" img-fluid " alt="img" />

                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="text-center col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-block m-auto">

                            <div className="card m-4" id="care_card">
                                <img src="images/img-7.png" className=" img-fluid " alt="img" />
                                <div className="card-body">
                                    <h5 className="card-title">Sheeren Collins</h5>
                                    <p className="card-text">ADMINISTRATION</p>
                                    <div className='social_icon d-flex justify-content-evenly'>
                                        <img src="images/insta.png" className=" img-fluid " alt="img" />
                                        <img src="images/fb.png" className=" img-fluid " alt="img" />
                                        <img src="images/tw.png" className=" img-fluid " alt="img" />
                                        <img src="images/wats.png" className=" img-fluid " alt="img" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    <div className="text-center col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-block m-auto">
                        <div className="card m-4" id="care_card">
                            <img src="images/img-8.png" className=" img-fluid " alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Jennifer Mullen</h5>
                                <p className="card-text">VETERINARY</p>
                                <div className='social_icon d-flex justify-content-evenly'>
                                    <img src="images/insta.png" className=" img-fluid " alt="img" />
                                    <img src="images/fb.png" className=" img-fluid " alt="img" />
                                    <img src="images/tw.png" className=" img-fluid " alt="img" />
                                    <img src="images/wats.png" className=" img-fluid " alt="img" />

                                </div>
                            </div>
                        </div>
                    </div>
</div>
            </div>
        </section>
    )
}

export default TeamSec