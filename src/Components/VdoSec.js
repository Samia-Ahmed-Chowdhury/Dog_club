import React from 'react'
import "./VdoSec.css"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function VdoSec({row,img_src,txt_cls}) {
    return (
        <>
            <section id="vdo_sec" className="vdo_sec my-5">
                <div className="container p-5 ">
                    <div className={` row ${row} py-4 px-4`}>
                        <div className={`${txt_cls} text-right col-xl-6 col-lg-7 col-md-10 col-sm-12 col-12 m-auto mb-5`}>
                            <h2>As a veterinarian and lover of animals.</h2>
                            <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                            <div className="h-btn pt-2">
                                <button className="vdo_btn"  href="#">Our Service</button>
                            </div>
                        </div>
                        <div className=" vdo_col col-xl-5 col-lg-5 col-md-10 col-sm-10 col-10 d-flex justify-content-center m-auto ">
                            <img src={img_src} alt="img" className='vdo_img img-fluid' />
                       <PlayCircleIcon className="play_icon"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VdoSec