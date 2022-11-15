import React from 'react'
import Hero from './Components/Hero'
import Post from './Components/Post'
import Price from './Components/Price'
import Footer from './Components/Footer'

function Blogs() {
  return (
    <>
       <Hero value={`Blogs you may like`} />
      <Post h2_title="Lastest Blogs" />
<Price/>
<Footer/>
    </>
  )
}
export default Blogs