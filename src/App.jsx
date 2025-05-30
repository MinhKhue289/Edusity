import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar' 
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/programs'
import Tittle from './Components/Tittle/Tittle'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Tittle subTittle = 'Our Program' tittle = 'What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Tittle subTittle = 'Gallery' tittle = 'Campus Photos'/>
        <Campus/>
        <Tittle subTittle = 'TESTIMONIALS' tittle = 'What Student Says'/>
        <Testimonials/>
        <Tittle subTittle = 'Contact Us' tittle = 'Get in touch'/>
        <Contact/>
        <Footer/>
        </div>
        <VideoPlayer playState = {playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App