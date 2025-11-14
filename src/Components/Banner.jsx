import { FaDownload } from 'react-icons/fa6';
import { motion } from "motion/react"
import riyal from '../assets/RIYAL.jpg'
import resume from '../assets/Resume.pdf'
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
    return (
        <div id='top' className='lg:flex      lg:h-[500px] flex-row-reverse  mt-[80px]'>
             <div className='lg:w-1/3 lg:mt-5 flex justify-center py-6  items-center'>
           <motion.img
           animate={{borderColor:['#f54245','#f54295','#d742f5','#9042f5','#4260f5','#42bcf5',"#42f5dd",'#4ef542','#a4f542','#f56942'],
            transition:{duration:10,repeat:Infinity}
           }}
           className='rounded-full w-72 h-72 lg:w-60 lg:h-60 border-4 p-2 bg-white  border-red-200 scale-125' src={riyal} alt="" />
            </div>
            <div  className='lg:w-2/3 banner-bg py-6 lg:py-2 rounded-2xl clip-path-custom mt-8 flex justify-center items-center'>
               <div className='w-3/4 '>
               <motion.h1 
                animate={{color:['#f54245','#f54295','#d742f5','#9042f5','#a4f542','#f56942'],
                    transition:{duration:10,repeat:Infinity}}}
               className=' text-4xl  font-bold text-center font-RubikVinyl tracking-widest uppercase'>Front-end <p className='ml-10'> developer</p></motion.h1>
                <p className='text-center px-5 h-20 text-gray-500 text-md md:text-xl'> 
                                    <Typewriter
                                     typeSpeed={20}
                                      deleteSpeed={20}
                                       cursorStyle
                                        cursor
                                         loop
                                          words={['Creating the visual and interactive elements of websites',' JavaScript, react.js, mongoDB, Node.js, express.js, Tailwind CSS, GitHub to deliver seamless and engaging user experiences']}></Typewriter>
                </p>
                <div  className='flex flex-wrap text-4xl gap-3 w-[200px] mx-auto grid-cols-3 justify-center text-center my-6'>
                <div><a target="_blank" href='https://www.facebook.com/nurealomriyal.riyal'><img className='w-10' src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" /></a></div>
                <div><a target="_blank" href='https://x.com/nurealamriyal'><img className='w-10' src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=FA5252" alt="" /></a></div>
                <div><a target="_blank" href='https://www.linkedin.com/in/nure-alam-riyal/'><img className='w-10' src="https://img.icons8.com/?size=100&id=kBCrQMzpQDLQ&format=png&color=000000" alt="" /></a></div>
                <div><a target="_blank" href='https://www.instagram.com/na_riyal_71/profilecard/?igsh=czRwbWJyaHBkaQ%3D%3D'><img className='w-10' src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000" alt="" /></a></div>             
                <div><a target="_blank" href='https://github.com/nure-alam-riyal'><img className='w-10' src="https://img.icons8.com/?size=100&id=bVGqATNwfhYq&format=png&color=000000" alt="" /></a></div>             
               </div>
               <div className='flex justify-center  items-center flex-col'>
                <a className='flex' target="_blank" download='nure-alam-riyal.pdf' href={resume}>
                <button
                 className='btn text-xl text-gray-500  education-bg'>Download Resume <br /><motion.div
               
               animate={{y:[-8,8,-8],
                transition:{duration:3,repeat:Infinity}
               }
            }> <FaDownload className='text-red-800'></FaDownload></motion.div></button>
                </a>
               </div>
               </div>
            </div>
           
        </div>
    );
};

export default Banner;