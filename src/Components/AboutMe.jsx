import Lottie from "lottie-react";
// import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import lotti from '../assets/Animation - 1736048520461.json';
const AboutMe = () => {
    return (
        <div className='lg:flex   '>
            <div className='lg:w-1/2  rounded-lg   flex justify-center items-center'>
                <div className='w-2/3 '>
                <Lottie animationData={lotti}>

                </Lottie>
                    {/* <h1 className='text-4xl  font-bold text-center'>MD NURE ALAM RIYAL</h1>
                    <div className='flex flex-wrap text-4xl gap-5 w-[200px] mx-auto grid-cols-3 justify-center text-center my-6'>
                        <div><FaFacebook></FaFacebook></div>
                        <div><FaWhatsapp></FaWhatsapp></div>
                        <div><FaTelegram></FaTelegram></div>
                        <div><FaLinkedin></FaLinkedin></div>
                        <div><FaGithub></FaGithub></div>
                    </div>
                    <div className='flex justify-center   flex-col'><button className='btn text-xl bg-red-300'>Download Resume <br /> <FaDownload></FaDownload></button></div> */}
                </div>
            </div>
            <div className='lg:w-1/2  lg:mt-5 flex flex-col  justify-center text-center '>
                <h2 className="text-4xl font-bold font-ranch my-5">Welcome to My Portfolio</h2>
                <p className="lg:">Hi, I’m <b>Riyal</b>, a web developer who loves creating websites that are both useful and easy to use. With  a background in <b>Information and communication of technology</b>, I focus on building responsive websites and web apps that work well on any device.
                    <br />
                    I work with tools like <b> JavaScript,React.js,Tailwind Css,Firebase, HTML, CSS, Node.js,Express.js.MongoDB</b> and I’m always learning new skills to keep up with the latest trends. I enjoy solving problems, designing simple and clear user interfaces, and turning creative ideas into reality.
                    <br />
                    In my free time, I like
                    <b> playing,walking(noise free road,my large campus ,village road,forest)</b>. I’m excited to work on projects that make a difference and would love to help bring your ideas to life!</p>
            </div>
        </div>
    );
};

export default AboutMe;