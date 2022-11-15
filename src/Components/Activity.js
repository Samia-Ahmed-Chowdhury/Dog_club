import React from 'react'
import './Activity.css'

function Activity() {
  return (
    <section id="activity_sec" className="activity_sec mt-5">
    <div className="container p-5 my-5 ">

      <div className="row py-4 px-4 ">
      <div className="text-center col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-block m-auto">
          <div className="card m-4" >
            <img src="images/icon-1.png" className="img_1 img-fluid mx-auto " alt="img" />
            <div className="card-body">
              <h5 className="card-title">+34793</h5>
              <p className="card-text">Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="text-center col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-block m-auto">
          <div className="card m-4" >
            <img src="images/icon-2.png" className="img_2 img-fluid mx-auto " alt="img" />
            <div className="card-body">
              <h5 className="card-title">+45382</h5>
              <p className="card-text">Deparment</p>
            </div>
          </div>
        </div>

        <div className="text-center col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-block m-auto">
          <div className="card m-4" >
            <img src="images/icon-3.png" className="img_3 img-fluid mx-auto " alt="img" />
            <div className="card-body">
              <h5 className="card-title">+54762</h5>
              <p className="card-text">Veterinarians</p>
            </div>
          </div>
        </div>
      </div>
        </div>
</section>
  )
}

export default Activity