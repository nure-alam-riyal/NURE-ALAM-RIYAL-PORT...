
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/PRoject2/Screenshot 2025-01-05 001150.png'
import img2 from '../assets/PRoject2/Screenshot 2025-01-05 001255.png'
import img3 from '../assets/PRoject2/Screenshot 2025-01-05 001414.png'
import img4 from '../assets/PRoject2/Screenshot 2025-01-05 001545.png'
import img5 from '../assets/PRoject2/Screenshot 2025-01-05 001450.png'
import img6 from '../assets/PRoject2/Screenshot 2025-01-05 001629.png'
// import img7 from '../assets/screencapture-resturant-management-106b2-web-app-2025-01-04-21_33_04.png'
const Project2 = () => {
    return (
         <div >
                   
                    <div className="lg:w-1/2  mx-auto">
                    <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={true} showStatus={true} showArrows={true}>
                        <div>
                            <img src={img3} />
                            
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
                            <img src={img1} />
                            
                        </div>
                        <div>
                        <img src={img5} />
                            
                        </div>
                        <div>
                        <img src={img6} />
                            
                        </div>
                    </Carousel>
                    <h1 className="text-2xl font-Kanit font-bold mb-6  text-center">SportifyZone  </h1>
                    <div>
                <p className="w-10/12 mx-auto text-center my-7">
                SportifyZone is a sports equipment management web application that allows users to efficiently manage sports gear. It provides a user-friendly interface to add, update, and delete equipment while ensuring security through Firebase authentication. The application is fully responsive, making it accessible across different devices.
                </p>
            </div>
            <div className="flex justify-center text-black space-x-3 flex-wrap">
                        <div className="rounded-badge px-3 py-1 mt-4 bg-green-200">  React.js </div>
                        {/* <div className="rounded-badge px-3 py-1 mt-4 bg-red-200">  TanStack Query </div> */}
                        <div className="rounded-badge px-3 py-1 mt-4 bg-orange-200"> Firebase   </div>
                        {/* <div className="rounded-badge px-3 py-1 mt-4 bg-blue-200">  Axios </div> */}
                        <div className="rounded-badge px-3 py-1 mt-4 bg-red-700"> DaisyUI </div>
                        <div className="rounded-badge px-3 py-1 mt-4 bg-orange-500">  TailwindCSS </div>
                        {/* <div className="rounded-badge px-3 py-1 mt-4 bg-gray-300">  Ant Design </div>
                        <div className="rounded-badge px-3 py-1 mt-4 bg-yellow-200">  Stripe </div> */}
                       </div>
                    <div className="flex flex-wrap text-white mt-4 justify-center gap-5">
                        <button className="btn education-bg font-semibold text-xl"><a  className="w-full h-full flex items-center text-gray-600 " target="_blank" href="https://equipment-sports.web.app/">Live Preview</a></button>
                        <button className="btn education-bg font-semibold text-xl"><a  className="w-full h-full flex items-center text-gray-600 " target="_blank" href="https://github.com/nure-alam-riyal/SportifyZone">Git Client</a></button>
                        <button className="btn education-bg font-semibold text-xl"><a  className="w-full h-full flex items-center text-gray-600 " target="_blank" href="https://github.com/nure-alam-riyal/SportifyZone-server-side">Git Server</a></button>
                        <button className="btn education-bg font-semibold text-xl"><a  className="w-full h-full flex items-center text-gray-600 " target="_blank" href="https://github.com/nure-alam-riyal/SportifyZone/blob/main/README.md">Details</a></button>
                    </div>
                    </div>
                </div>
    );
};

export default Project2;