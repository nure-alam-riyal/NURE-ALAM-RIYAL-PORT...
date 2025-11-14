import logo from '../assets/Riyal (2).png'

const Footer = () => {
    return (
        <footer className="footer footer-center bg-gray-700 bg-opacity-10 text-[#dfeceb] z-50   p-10">
  <aside>
    <img className='w-32 h-32 rounded-full' src={logo} alt="" />
    <p className="font-bold font-ranch text-2xl">
  MD NURE ALAM RIYAL
     
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
    <div  className='flex  text-4xl gap-5 w-[200px] mx-auto grid-cols-3 justify-center text-center '>
    <div><a target="_blank" href='https://www.facebook.com/nurealomriyal.riyal'><img className='w-10' src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" /></a></div>
                <div><a target="_blank" href='https://x.com/nurealamriyal'><img className='w-10' src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=FA5252" alt="" /></a></div>
                <div><a target="_blank" href='https://www.linkedin.com/in/nure-alam-riyal/'><img className='w-10' src="https://img.icons8.com/?size=100&id=kBCrQMzpQDLQ&format=png&color=000000" alt="" /></a></div>
                <div><a target="_blank" href='https://www.instagram.com/na_riyal_71/profilecard/?igsh=czRwbWJyaHBkaQ%3D%3D'><img className='w-10' src="https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000" alt="" /></a></div>             
                <div><a target="_blank" href='https://github.com/nure-alam-riyal'><img className='w-10' src="https://img.icons8.com/?size=100&id=bVGqATNwfhYq&format=png&color=000000" alt="" /></a></div>             
                
                
              
               </div>
    </div>
  </nav>
</footer>
    );
};

export default Footer;