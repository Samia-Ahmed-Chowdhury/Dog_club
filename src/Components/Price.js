import React from 'react'
import "./CareSec.css"

function Price() {
  return (
    <section id="care_sec" className="care_sec my-5">
    <div className="container p-5 my-5 ">
        <div className="row py-4  ">
        <div className="py-5 col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12 m-auto mb-5 ">
      <h2>Title Here</h2>
      <p>Lorem Ipsum available, but the majority have suffered alteration in some form</p>
      </div>
      </div>
      <div className="row py-2  ">
      <div className="text-center col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-block m-auto">
          <div className="card m-4" id="care_card">
            <img src="images/dog-1.png" className=" img-fluid " alt="img" />
            <div className="card-body">
              <h5 className="price-title"><span className='pp'>$50</span> $30</h5>
              <button className='price_btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="text-center col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-block m-auto">
          <div className="card m-4" id="care_card">
            <img src="images/dog-2.png" className=" img-fluid " alt="img" />
            <div className="card-body">
              <h5 className="price-title"><span className='pp'>$40</span> $25</h5>
              <button className='price_btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className="text-center col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-block m-auto">
          <div className="card m-4" id="care_card">
            <img src="images/dog-3.png" className=" img-fluid " alt="img" />
            <div className="card-body">
              <h5 className="price-title"><span className='pp'>$45</span> $20</h5>
              <button className='price_btn'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
        </div>
</section>
  )
}

export default Price
