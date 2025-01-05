
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
                    <h1 className="text-2xl font-Kanit font-bold mb-6  text-center">SportifyZone  </h1>
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
                    <div className="flex flex-wrap justify-center gap-5">
                        <button className="btn bg-blue-300 font-semibold text-xl"><a  className="w-full h-full flex items-center" target="_blank" href="https://equipment-sports.web.app/">Live Preview</a></button>
                        <button className="btn bg-blue-300 font-semibold text-xl"><a  className="w-full h-full flex items-center" target="_blank" href="https://github.com/programming-hero-web-course2/b10-a10-client-side-nure-alam-riyal">Git Client</a></button>
                        <button className="btn bg-blue-300 font-semibold text-xl"><a  className="w-full h-full flex items-center" target="_blank" href="https://github.com/programming-hero-web-course2/b10-a10-server-side-nure-alam-riyal">Git Server</a></button>
                        <button className="btn bg-blue-300 font-semibold text-xl"><a  className="w-full h-full flex items-center" target="_blank" href="https://github.com/programming-hero-web-course2/b10-a10-client-side-nure-alam-riyal/blob/main/README.md">Details</a></button>
                    </div>
                    </div>
                </div>
    );
};

export default Project2;