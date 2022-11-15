import React from 'react'
import Hero from './Components/Hero'
import VdoSec from './Components/VdoSec'
import CareSec from './Components/CareSec'
import TeamSec from './Components/TeamSec'
import Activity from './Components/Activity'
import Post from './Components/Post'
import Footer from './Components/Footer'
function Home() {
  return (
    <>
      <Hero value="First I wanted to be a veterinarian" />
      <VdoSec {...vdVal} />
      <CareSec />
      <TeamSec />
      <Activity />
      <Post h2_title="Recent Posts" />
      <Footer />
    </>
  )
}

export default Home

const vdVal =
  {
    row: "",
    img_src: "../images/img-2.png",
    txt_cls:"text-start",
  }