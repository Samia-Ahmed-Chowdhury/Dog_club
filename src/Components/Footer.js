import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <>
      <footer className='py-5'>
        <div className="container p-5  ">
          <div className="row   ">
            <div className=" col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-12 d-block m-auto">
              <h4>About </h4>
              <li>History</li>
              <li>Our Team</li>
              <li>BrandGuidelines</li>
              <li>Term&Condition</li>
              <li>Privacy Policy</li>
            </div>
            <div className=" col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-12 d-block m-auto">
              <h4>Service </h4>
              <li>How to Order</li>
              <li>Our Product</li>
              <li>Order Status</li>
              <li>Promo</li>
              <li>Payment Method</li>
            </div>
            <div className="sub col-xxl-6 col-lg-6 col-md-10 col-sm-10 col-12 d-block m-auto">
              <h3>Title Here</h3>
              <p>Lorem Ipsum available, but the majorit</p>
              <div>
              <form className="search d-flex">
                <input  type="search" aria-label="Search" />
                <button className="sent_btn" type="submit">
                  <img src="images/send-icon.svg" className=" img-fluid " alt="img" />
                </button>
              </form>
              </div>
              </div>
          <div className="row icon_row">
              <div className='icon d-flex justify-content-end'>
                <img src="images/Instagram.png" className=" img-fluid " alt="img" />
                <img src="images/Facebook.png" className=" img-fluid " alt="img" />
                <img src="images/Twitter.png" className=" img-fluid " alt="img" />
                <img src="images/WhatsApp.png" className=" img-fluid " alt="img" />

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer