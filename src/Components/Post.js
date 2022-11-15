import React from 'react'
import './Post.css'

function Post({h2_title}) {
  return (
    <section id="post_sec" className="post_sec my-5">
      <div className="container p-5 my-5 ">
        <div className="row   ">
          <div className=" text-center col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12 m-auto mb-5 ">
            <h2>{h2_title}</h2>
            <p>Lorem Ipsum available, but the majority have suffered alteration in some form</p>
          </div>
        </div>
        <div className="row px-5 ">

          <div className=" col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-block m-auto">
            <div className="card post_card m-4">
              <img src="images/img-3.png" className=" card_img img-fluid " alt="img " />
              <div className="card-body">
                <h3 className="card-title">As a veterinarian and lover of animals</h3>
             <h5>February 09,2020</h5>
                <p className="card-text">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look</p>
             <h4>Read More+</h4>
              </div>
            </div>
          </div>

          <div className=" col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-block m-auto">
            <div className="card mid_card post_card m-4">
              <img src="images/img-10.png" className=" img-fluid " alt="img" />
              <div className="card-body">
                <h3 className="card-title">As a veterinarian and lover of animals</h3>
             <h5>February 10,2020</h5>
                <p className="card-text">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look</p>
             <h4>Read More+</h4>
              </div>
            </div>
          </div>

          <div className=" col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-block m-auto">
            <div className="card post_card m-4">
              <img src="images/img-5.png" className="card_img img-fluid " alt="img" />
              <div className="card-body">
                <h3 className="card-title">As a veterinarian and lover of animals</h3>
             <h5>February 11,2020</h5>
                <p className="card-text">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which look</p>
             <h4>Read More+</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Post