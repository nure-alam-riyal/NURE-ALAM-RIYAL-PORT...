import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/LatestProject/Screenshot 2025-02-06 143042.png'
import img2 from '../assets/LatestProject/Screenshot 2025-02-06 143012.png'
import img3 from '../assets/LatestProject/Screenshot 2025-02-06 143812.png'
import img4 from '../assets/LatestProject/Screenshot 2025-02-06 143121.png'
import img5 from '../assets/LatestProject/Screenshot 2025-02-06 143324.png'
import img6 from '../assets/LatestProject/Screenshot 2025-02-06 143456.png'

const ProjectLatest = () => {
    return (
        <div className="">
                  
                   <div className="lg:w-1/2  mx-auto">
                   <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={true} showStatus={true} showArrows={true}>
                       <div>
                           <img src={img1} />
                           
                       </div>
                       {/* <div>
                           <img src={img7} />
                           
                       </div> */}
                       <div>
                       <img src={img2} />
                           
                       </div>
                       <div>
                       <img src={img4} />
                           
                       </div>
                       <div>
                           <img src={img5} />
                           
                       </div>
                       <div>
                       <img src={img6} />
                           
                       </div>
                       <div>
                       <img src={img3} />
                           
                       </div>
                   </Carousel>
                   <h1 className="text-2xl font-bold mb-6 font-Kanit  text-center">Dream Nest Real Estate</h1>
                   <div>
                       <p className="w-10/12 mx-auto text-center my-7">
                       Dream Nest Real Estate is a modern real estate e-commerce platform built with React.js, Firebase, and Stripe. It supports Admin, Agent, and Customer roles, enabling users to buy, sell, and rent properties. Features include authentication, payments, property listings, search filters, and a responsive UI using TailwindCSS & DaisyUI.
                       </p>
                       <div className="flex justify-center text-black space-x-3 flex-wrap">
                        <div className="rounded-badge px-3 py-1 mt-4 bg-green-200">  React.js </div>
                        <div className="rounded-badge px-3 py-1 mt-4 bg-red-200">  TanStack Query </div>
                        <div className="rounded-badge px-3 py-1 mt-4 bg-orange-200"> Firebase   </div>
                        <div className="rounded-badge px-3 py-1 mt-4 bg-blue-200">  Axios </div>
                        <div className="rounded-badge px-3 py-1 mt-4 bg-red-700"> DaisyUI </div>
                        <div className="rounded-badge px-3 py-1 mt-4 bg-orange-500">  TailwindCSS </div>
                        <div className="rounded-badge px-3 py-1 mt-4 bg-gray-300">  Ant Design </div>
                        <div className="rounded-badge px-3 py-1 mt-4 bg-yellow-200">  Stripe </div>
                       </div>
                   </div>
                   <div className="flex justify-center text-white mt-4 flex-wrap gap-5 ">
                       <button className="btn education-bg font-semibold text-xl "><a className="w-full text-gray-600 h-full flex items-center" target="_blank" href="https://real-state-asset.web.app/">Live Preview</a></button>
                       <button className="btn education-bg font-semibold text-xl "><a className="w-full text-gray-600 h-full flex items-center" target="_blank" href="https://github.com/nure-alam-riyal/Real-State-Management-Client-Side">Git Client</a></button>
                       <button className="btn education-bg font-semibold text-xl "><a className="w-full text-gray-600 h-full flex items-center" target="_blank" href="https://github.com/nure-alam-riyal/Real-State-Management-Server-Side">Git Server</a></button>
                       <button className="btn education-bg font-semibold text-xl "><a className="w-full text-gray-600 h-full flex items-center" target="_blank" href="https://github.com/nure-alam-riyal/Real-State-Management-Client-Side/blob/main/README.md">Details</a></button>
                   </div>
                   </div>
               </div>
    );
};

export default ProjectLatest;