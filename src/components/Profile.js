import React from "react";
import profile from '../images/daffeyd.jpg';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

function Card() {
  return (

    <div className=" mt-56 ml-16 ">
      <div class="grid grid-rows-3 grid-flow-col gap-0">
        <div class="row-span-3 ...">
          <div class="grid grid-row-3 grid-flow-col gap-1 text-left">
            <div class="row-span-3 ...">
              <span className="text-xl text-periwinkle-gray-100 font-mono text-left mt-3 mr-3">
                01.
              </span>
              <span className="text-2xl text-periwinkle-gray-500 font-sans font-bold text-right mt-3">
                About Me
              </span>
            </div>
            <div class="text-left row-span-3 col-span-5 ... ">
              <div class="py-4">
                <div class="w-3/5 border-t border-manatee-500 opacity-30 "> </div>
              </div>
            </div>
          </div>
          <p className="text-lg font-sans text-manatee-500 leading-relaxed mt-6 ml-1 w-4/5">
            Hello! My name is Daffeyd and I enjoy creating things that make any activity easier to do. My interest in robotics started back in 2018, when i try to program humanoid robot! At that time i join a robotic club in my high school. I learn a lot about it like IoT and Machine Learning!
          </p>
          <p className="text-lg font-sans text-manatee-500 leading-relaxed mt-6 ml-1 w-4/5">
            When i'm in the robotic club I join quite a lot of robotic competition, including  national and international robotic competition. From that competition I've learned how to managed a team and also presenting the main idea of the project.
          </p>
          <p className="text-lg font-sans text-manatee-500 leading-relaxed mt-6 ml-1 w-4/5">
            Now, I also upgrade coding skills to learn many more method and master some of it. Here's some technologies that i've been work recently:
          </p>
          <div class="grid grid-rows-3 grid-flow-col gap-1">
            <div class="row-span-3 ...">
              <ul class="list-disc text-lg font-sans text-manatee-500 leading-relaxed mt-6 ml-7">
                <li>Raspberry</li>
                <li>Arduino</li>
                <li>React</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div class="row-span-3 ...">
              <ul class="list-disc text-lg font-sans text-manatee-500 leading-relaxed mt-6 ">
                <li>Php</li>
                <li>MySQL</li>
                <li>Python</li>
                <li>FastAPI</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-20 row-span-2 col-span-1 ...">
          <div className='flex flex-col justify-center max-w-xs mx-auto  bg-manatee-300 shadow-2xl rounded-xl p-5'>
            <div className="">
              <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={profile} alt="profile face" />

            </div>
            <div className="text-center mt-5">
              <p className='text-xl sm:text-2xl font-semibold text-gray-900'>
                Daffeyd Wilbert Limardi
              </p>
              <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                Robotic and Software Developer
              </p>
              <div className="flex align-center justify-center mt-4">
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:text-white transition-colors duration-300" href="https://github.com/daffeyd">
                  <FaGithub />
                  <span class="sr-only">Github</span>
                </a>
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 l hover:text-white transition-colors duration-300" href="https://www.instagram.com/daffeydwilbert/">
                  <FaInstagram />
                  <span class="sr-only">Instagram</span>
                </a>

                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500  hover:text-white transition-colors duration-300" href="https://mailto:daffeydwilbert@gmail.com">
                  <FaRegEnvelope />
                  <span class="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card; 
