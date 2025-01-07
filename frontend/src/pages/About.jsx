import { Button } from "@headlessui/react";
import {Link} from "react-router-dom"
const About = () => {
    return (
      <>
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            {/* About Text */}
            <div className="font-light sm:text-lg dark:text-white">
              <h2 className="mb-4 lg:text-5xl font-extrabold text-gray-900 text-4xl text-center">
                About Me
              </h2>
              <p className="mb-6">
                I am a professional web and app developer with experience in
                building dynamic and responsive applications. Skilled in React,
                Next.js, Node.js, and various other modern technologies, I focus
                on delivering high-quality, user-centric solutions.
              </p>
              <p className="mb-6">
                I hold a <span className="font-bold">B.Tech in Electronics and Telecommunication</span> from CSMSS
                Chh. Shahu College of Engineering, and continuously strive to
                enhance my skills through hands-on projects.
              </p>
              <p className="mb-4 font-medium text-gray-900 dark:text-white">
                My expertise includes:
              </p>
              {/* Technical Stack */}
              <ul className="space-y-2">
                <li>
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    Frontend:
                  </span>{" "}
                  <span className="text-gray-800 dark:text-gray-300">
                    React, Next.js, HTML5, CSS3, Tailwind CSS
                  </span>
                </li>
                <li>
                  <span className="font-bold text-green-600 dark:text-green-400">
                    Backend:
                  </span>{" "}
                  <span className="text-gray-800 dark:text-gray-300">
                    Node.js, MongoDB, PostgreSQL, SQL
                  </span>
                </li>
                <li>
                  <span className="font-bold text-purple-600 dark:text-purple-400">
                    Version Control:
                  </span>{" "}
                  <span className="text-gray-800 dark:text-gray-300">
                    Git/GitHub, Trello, Slack
                  </span>
                </li>
              </ul>
              <p className="mt-4">
                I’m committed to solving problems and creating seamless digital
                experiences.
              </p>
            </div>
  
            {/* Images */}
            <div className="grid grid-cols-2 gap-6 mt-8 ">
              {/* <img
                className="w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="Office content 1"
              /> */}
<div className="flex border bg-gray-200 grey-100 flex-col justify-center items-center py-10  rounded-[40px] shadow-2xl"> <span className="text-4xl lg:text-8xl font-bold mb-2 text-green-400">1.6+</span> <span className="xs:text-lg lg:text-2xl font-bold">Years</span> <span className="xs:text-lg lg:text-2xl font-bold">of Experience </span> </div>
<div className="flex border bg-gray-200 grey-100 flex-col justify-center items-center py-10  rounded-[40px] shadow-2xl"> <span className="text-4xl lg:text-8xl font-bold mb-2 text-green-400">10+</span> <span className="xs:text-lg lg:xs:text-lg lg:text-2xl font-bold">Projects</span> <span className="xs:text-lg lg:text-2xl font-bold">Completed </span> </div>
              {/* <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="Office content 2"
              /> */}
                         
            </div>
      
          </div>
   <div className="text-center w-full flex justify-center items-center  ">
        <a href="#contact" >
  
<button type="button" class="px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg class="w-4 h-4 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
</svg>
          Contact me
          </button>
          </a> 
          </div>
        </section>
      </>
    );
  };
  
  export default About;
  