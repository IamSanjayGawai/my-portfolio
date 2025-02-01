import { useEffect } from "react";
import About from "./About";
import Blog from "./Blog";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Follow from "./Follow";
import MainSection from "./Hero";
import Projects from "./Project";
import Services from "./Services";
import Skills from "./Skills";
import WorkWith from "./WorkWith";


const Home = () => {

  useEffect(()=> {
    window.scrollTo(0, 0);
  })
  return (
    <>
  
      <div id="hero">
        <MainSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work-with">
        <WorkWith />
      </div>

      <div id="services">
        <Services />
      </div>
   
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
  
      {/* <div id="blog">
        <Blog />
      </div> */}
      <div id="contact">
      <Follow/>
      </div>
      <div id="contact">
        <Contact />
      </div>

    </>
  );
};

export default Home;
