import { FaDownload } from 'react-icons/fa';
import logo from '../assets/Riyal (2).png'
import { motion } from "motion/react"
import resume from '../assets/Resume.pdf'


const NavBar = () => {
    const links=
    <>
                       <li className="hover:text-blue-300 text-center  flex justify-center text-white"><a className='text-center block' href='#about'>about me</a></li>
                       <li className="hover:text-blue-300 text-center  flex justify-center text-white"><a className='text-center block' href='#skill'>Skill</a></li>
                       <li className="hover:text-blue-300 text-center  flex justify-center text-white"><a className='text-center block' href='#education'>EDUCATION</a></li>
                       <li className="hover:text-blue-300 text-center  flex justify-center text-white"><a className='text-center block' href='#project'>Project</a></li>
                       <li className="hover:text-blue-300 text-center  flex justify-center text-white"><a className='text-center block' href='#contact'>contact me</a></li>
    </>   
    return (
        <div className="  flex justify-center ">
            <div className="navbar px-0 bg-white w-full backdrop-blur-xl bg-opacity-20 z-40 fixed">
   <div className=" w-11/12 mx-auto ">
   <div className="navbar-start flex justify-start items-center mt-0">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm uppercase font-semibold clip-path-education text-center text-xl dropdown-content bg-red-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
    {links}
      </ul>
    </div>
   <div className='flex justify-start h-full items-center'><img className='w-10 object-cover rounded-full' src={logo} alt="" /></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu uppercase  text-sm menu-horizontal mt-0 px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end  ">
  <div className='flex justify-center  items-center flex-col'>
                <a className='flex' download='nure-alam-riyal.pdf' href={resume}>
                <button className='font-semibold btn text-lg text-gray-600 banner-bg'>Resume <br /><motion.div
               
               animate={{y:[-8,8,-8],
                transition:{duration:3,repeat:Infinity}
               }
            }> <FaDownload className='text-black'></FaDownload></motion.div></button>
                </a>
               </div>
  </div>
   </div>
</div>
        </div>
    );
};

export default NavBar;