import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';


function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex align-center justify-center mt-4">
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500  hover:text-white transition-colors duration-300" href="https://github.com/daffeyd">
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
  )
}

export default Footer