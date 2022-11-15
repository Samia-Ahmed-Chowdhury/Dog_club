import React from 'react'
import Hero from './Components/Hero'
import VdoSec from './Components/VdoSec'
import Activity from './Components/Activity'
import Footer from './Components/Footer'

function About() {
  return (
    <>
      <Hero value="About Us" />
      <VdoSec {...vdVal}/>
<Activity/>
<Footer/>
    </>
  )
}

export default About

const vdVal =
  {
    row: " flex-row-reverse ",
    img_src: "../images/img-13.png",
    txt_cls:"text-end",
  }