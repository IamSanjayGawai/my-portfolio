import Profile_img from "../assets/images/profile-img.png";
import react from "../assets//skills/react.png";
import bootstrap from "../assets//skills/bootstrap.png";
import python from "../assets//skills/python.png";
import node from "../assets//skills/node.png";
import tailwind from "../assets//skills/tailwind.png";
import material from "../assets//skills/material.png";
import figma from "../assets//skills/figma.png";
import next from "../assets//skills/next.png";
import mongodb from "../assets//skills/mongodb.png";
import express from "../assets//skills/express.png";
import typescript from "../assets//skills/typescript.png";

const MainSection = () => {
  return (
    <div className="w-full flex items-center justify-center mt-10 relative">
      {/* Background Section */}
      <div className="absolute inset-0 bg-[url('./assets/background.png')] bg-center bg-cover bg-no-repeat opacity-50 z-0"></div>


      {/* Main Content */}
      <div className="container w-full flex flex-col sm:flex-col md:flex-col lg:flex-col items-center justify-between relative z-10">
        {/* Left section - Content */}
        <div className="flex flex-col justify-center w-full h-full p-4">
          <h1 className="font-extrabold text-4xl lg:text-5xl mb-4 w-full text-center">
            <div className="w-full flex justify-center items-center">
              <div className="w-2/4 border-t-4 border-black mb-4"></div>
            </div>
            👋 Hello, I am <span className="text-green-400">Sanjay Gawai</span>
            <div className="w-full flex justify-center items-center">
              <div className="w-2/4 border-t-4 border-black mt-5"></div>
            </div>
          </h1>
          <p className="text-3xl lg:text-6xl font-bold text-black text-center break">
            <span>Expert </span>
            <span className="text-green-400 ">Web Design </span>
            <span className="text-green-400 ">Front-End Development,</span>
            <span> Including </span>
            <span className="text-green-400 ">SaaS Solutions </span>
          </p>

          <p className="text-lg lg:text-3xl mb-4 w-full text-center break mt-10">
            I'm an{" "}
            <span className="text-lg lg:text-3xl font-bold text-black">
              Expert Frontend Developer
            </span>{" "}
            with
            <span className="px-4 border-2 rounded-full text-center ml-2 bg-gray-100">
              <span className="text-lg lg:text-3xl font-bold text-black">
                1.7+ Years
              </span>
            </span>{" "}
            of expertise in{" "}
            <span className="text-lg lg:text-3xl font-bold text-black">
              ReactJS
            </span>
            . I create responsive, user-centric web solutions, specializing in{" "}
            <span className="text-lg lg:text-3xl font-bold text-black">
              SaaS
            </span>{" "}
            and{" "}
            <span className="text-lg lg:text-3xl font-bold text-black ">
              eCommerce
            </span>{" "}
            development.
          </p>

          {/* Button Section */}
          <div className="flex justify-center items-center space-x-4 w-full mt-5">
            <a
              href="/SanjayGawai_Resume.pdf"
              download="SanjayGawai_Resume.pdf"
              type="application/pdf"
            >
              
              <button
                type="button"
                className="text-black border-2 hover:border-white xs:text-sm lg:text-2xl   border-black bg-white hover:text-white hover:bg-green-600 focus:ring-4 focus:outline  font-medium rounded-full  px-4 py-2 inline-flex items-center "
              >
                 <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                Download CV
           
              </button>
            </a>
            <a href="#contact">
            <button class="relative inline-flex  xs:text-sm lg:text-2xl items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 rounded-full">
<span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">

                Hire Me
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Right section - Image */}
        <div className="flex justify-center items-center sm:w-full md:w-1/4 lg:w-3/4 p-6 sm:order-1 lg:order-2 gap-1 ">
          <div className="flex flex-col gap-2  ">
           
            <div className="flex  items-center gap-2 rounded-full px-2 py-2 border-2 bg-black text-white font-bold text-[10px] lg:text-lg">
              {" "}
              <img src={react} className="lg:h-10 lg:w-10 w-4 h-4"></img> React.js{" "}
            </div>
        
            <div className="flex  items-center gap-2 rounded-full px-2 py-2 border-2 bg-black text-white font-bold text-[10px] lg:text-lg">
              {" "}
              <img
                src={next}
                className="lg:h-10 lg:w-10 w-4 h-4 bg-white rounded-full"
              ></img>{" "}
              Next.js
            </div>
            <div className="flex  items-center gap-2 rounded-full px-2 py-2 border-2 bg-black text-white font-bold text-[10px] lg:text-lg">
              {" "}
              <img src={react} className="lg:h-10 lg:w-10 w-4 h-4"></img>  Native
            </div>
            <div className="flex  items-center gap-2 rounded-full px-2 py-2 border-2 bg-black text-white font-bold text-[10px] lg:text-lg">
             {" "}
              <img src={tailwind} className="lg:h-10 lg:w-10 w-4 h-4"></img>Tailwind
            </div>
            <div className="flex  items-center gap-2 rounded-full px-2 py-2 border-2 bg-black text-white font-bold text-[10px] lg:text-lg">
              {" "}
              <img src={figma} className="lg:h-10 lg:w-10 w-4 h-4"></img> Figma
            </div>
            <div className="flex  items-center gap-2 rounded-full px-2 py-2 border-2 bg-black text-white font-bold text-[10px] lg:text-lg">
             {" "}
              <img src={material} className="lg:h-10 lg:w-10 w-4 h-4"></img> Material
            </div>
          </div>
          <img
            src={Profile_img}
            className="w-60 xs:w-[40%] lg:w-[60%] object-cover rounded-xl"
            alt="Profile"
          />
          <div className="flex flex-col gap-2">
            <div className="flex  items-center  rounded-full px-2 py-2 border-2 bg-black text-white font-bold text-[10px] lg:text-lg">
            {" "}
              <img src={bootstrap} className="lg:h-10 lg:w-10 w-4 h-4 "></img>Bootstrap
            </div>
            <div className="flex  items-center gap-2 rounded-full px-2 py-2 border-2 bg-black text-white font-bold text-[10px] lg:text-lg">
              {" "}
              <img src={node} className="lg:h-10 lg:w-10 w-4 h-4"></img> Node
            </div>
            <div className="flex  items-center gap-2 rounded-full px-2 py-2 border-2 bg-black text-white font-bold text-[10px] lg:text-lg">              {" "}
              <img src={mongodb} className="lg:h-10 lg:w-10 w-4 h-4"></img> Mongo
            </div>
            <div className="flex  items-center gap-2 rounded-full px-2 py-2 border-2 bg-black text-white font-bold text-[10px] lg:text-lg">
              {" "}
              <img src={python} className="lg:h-10 lg:w-10 w-4 h-4"></img> Python
            </div>
            <div className="flex  items-center gap-2 rounded-full px-2 py-2 border-2 bg-black text-white font-bold text-[10px] lg:text-lg">
             {" "}
              <img src={typescript} className="lg:h-10 lg:w-10 w-4 h-4"></img> TypeScript
            </div>
            <div className="flex  items-center gap-2 rounded-full px-2 py-2 border-2 bg-black text-white font-bold text-[10px] lg:text-lg">
              {" "}
              <img
                src={express}
                className="lg:h-10 lg:w-10 w-4 h-4 bg-white rounded-full"
              ></img>{" "}
              Express
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
