import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view'
import './About.css';

function About() {
  return (
    <div>
     
     <div className="max-w-4xl mt-20">
        <p className="text-lg text-left font-mono text-aquamarine-400 leading-relaxed mt-4 ml-1">
        Hi, my name is
        </p>
        <p className="text-6xl text-periwinkle-gray-500 font-sans font-bold text-left mt-4">
        Daffeyd Wilbert.
        </p>
        <p className="text-6xl text-manatee-500 font-sans font-bold text-left mt-4">
        I build robotics and software projects.
        </p>
        <p className="text-lg font-sans text-manatee-500 leading-relaxed mt-6 ml-1 w-3/5">
        I'm a Robotic and a software engineer specializing in building databases system with API to connect with robotics hardware. Currently, I'm studying at <a className="text-manatee-300" class="hover-underline-animation" href="https://base.binus.ac.id/">BINUS ASO School of Engineering</a> majoring in Automotive and Robotics Engingeering.
        </p>
      </div>
      
      
      {/* <ScrollIntoView selector = "#tech">

        <div class='mx-auto p-20'>
          
           <FaChevronDown class= "animate-bounce mx-auto text-3xl text-blue-500"/> 
      
        </div>
       </ScrollIntoView> */}
    </div>
  )
}

export default About

