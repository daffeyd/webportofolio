import React, { useEffect } from 'react'
import About from './components/About'
import Profile from './components/Profile'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      once: true,

    })
  })
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-mirage-500 ">
      <div className="mx-20">
        <div data-aos="fade-down" data-aos-duration="800">
          <About />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <Profile />
          
        </div>
      </div>
    </div>
  );
}

export default App;
