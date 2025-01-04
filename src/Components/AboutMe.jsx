import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa6";

const AboutMe= () => {
    return (
        <div  className='md:flex   bg-slate-300 '>
                    <div  className='md:w-2/3 bg-red-100  clip-path-custom flex justify-center items-center'>
                       <div className='w-2/3 '>
                       <h1 className='text-4xl  font-bold text-center'>MD NURE ALAM RIYAL</h1>
                       <div  className='flex flex-wrap text-4xl gap-5 w-[200px] mx-auto grid-cols-3 justify-center text-center my-6'>
                        <div><FaFacebook></FaFacebook></div>
                        <div><FaWhatsapp></FaWhatsapp></div>
                        <div><FaTelegram></FaTelegram></div>
                        <div><FaLinkedin></FaLinkedin></div>
                        <div><FaGithub></FaGithub></div>
                       </div>
                       <div className='flex justify-center   flex-col'><button className='btn text-xl bg-red-300'>Download Resume <br /> <FaDownload></FaDownload></button></div>
                       </div>
                    </div>
                    <div className='md:w-1/3 p-10 md:mt-5 flex flex-col   justify-center text-center '>
                 <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
                 <p className="md:-ml-32">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae in soluta et eum. Nemo ut, quidem eos rem iusto reiciendis eaque? Explicabo ab doloribus necessitatibus! Consectetur quas quo id laudantium et voluptate saepe omnis atque. Eum, accusantium eos. Reiciendis inventore quis officiis facilis unde sunt fuga ullam est nesciunt!</p>
                    </div>
                </div>
    );
};

export default AboutMe;