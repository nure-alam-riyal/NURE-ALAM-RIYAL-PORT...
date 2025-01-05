import { motion } from "motion/react"
import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Skill from "../Components/Skill";
import Title from "../Components/Title";
import {  FaArrowCircleUp } from "react-icons/fa";
import Project from "../Components/Project";


const LayOut = () => {
    return (
        <div className="w-11/12  mx-auto">
            <NavBar></NavBar>
            <Banner></Banner>
          <div id="about">
            {/* <Slide> */}
            <Title  title={'About me'}></Title>
            {/* </Slide> */}
             </div>
            <AboutMe></AboutMe>
            <div id="skill">  <Title  title={'Skill'}></Title></div>
            <Skill></Skill>
            <div id="education">  <Title  title={'Education'}></Title></div>
            <Education></Education>
            <div id="project">  <Title  title={'Project'}></Title></div>
            <Project></Project>
            <div id="contact">   <Title  title={'Contact me'}></Title></div>
            <Contact></Contact>
            <div className="relative ">
                <motion.button
                animate={{y:[-10,20,-10],
                    transition:{duration:5, repeat:Infinity}
                }}
                
                className="text-7xl absolute top-20 right-3"><a href="#top"><FaArrowCircleUp className="bg-green-200 rounded-full"></FaArrowCircleUp></a></motion.button>
            </div>
            <Footer></Footer>
            

        </div>
    );
};

export default LayOut;