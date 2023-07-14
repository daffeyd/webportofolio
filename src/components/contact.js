import { FaArrowRight } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <div className="max-w-lg w-full text-center m-auto pt-20 pb-10" id="contactme">
      <div className="max-w-4xl mt-20">
        <p className="text-lg  font-mono text-aquamarine-400 leading-relaxed mt-4 ">
          03. What's Next?
        </p>
        <p className="text-6xl text-periwinkle-gray-500 font-sans font-bold mt-4">
          Get In Touch
        </p>
        <p className="text-lg font-sans text-manatee-500 leading-relaxed mt-6">
          I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
      </div>
      <a href="mailto:me.daffeydwilbert@gmail.com">
        <button class="mt-6 bg-transparent hover:bg-teal-700 hover:bg-opacity-30 text-teal-100 py-2 px-4 border border-teal-100  rounded">
          Say Hello
        </button>
      </a>
    </div>
  );
}