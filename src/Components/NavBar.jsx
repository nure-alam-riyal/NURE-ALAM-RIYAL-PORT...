import { FaDownload } from 'react-icons/fa';
import logo from '../assets/NAR.png'
import { motion } from "motion/react"
import resume from '../assets/hr@abc.pdf'

const NavBar = () => {
    const links=
    <>
                       <li className=""><a href='#about'>about me</a></li>
                       <li className=""><a href='#skill'>Skill</a></li>
                       <li className=""><a href='#education'>EDUCATION</a></li>
                       <li className=""><a href='#project'>Project</a></li>
                       <li className=""><a href='#contact'>contact me</a></li>
    </>   
    return (
        <div className="  flex justify-center">
            <div className="navbar  bg-red-400 bg-opacity-30 z-40   fixed">
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
        className="menu menu-sm uppercase dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
    {links}
      </ul>
    </div>
   <div className='flex justify-start h-full items-center'><img className='w-16  rounded-full' src={logo} alt="" /></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu uppercase font-semibold text-xl menu-horizontal mt-0 px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end  ">
  <div className='flex justify-center  items-center flex-col'>
                <a className='flex' download='pdf' href={resume}>
                <button className='font-semibold btn text-lg bg-red-300'>Download Resume <br /><motion.div
               
               animate={{y:[-8,8,-8],
                transition:{duration:3,repeat:Infinity}
               }
            }> <FaDownload></FaDownload></motion.div></button>
                </a>
               </div>
  </div>
   </div>
</div>
        </div>
    );
};

export default NavBar;