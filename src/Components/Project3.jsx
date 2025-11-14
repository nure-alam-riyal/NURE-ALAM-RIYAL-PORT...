
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/Project3/Screenshot 2025-01-05 003257.png'
import img2 from '../assets/Project3/Screenshot 2025-01-05 003409.png'
import img3 from '../assets/Project3/Screenshot 2025-01-05 003324.png'
import img4 from '../assets/Project3/Screenshot 2025-01-05 003532.png'
import img5 from '../assets/Project3/Screenshot 2025-01-05 003601.png'
import img6 from '../assets/Project3/Screenshot 2025-01-05 003806.png'
import img7 from '../assets/Project3/Screenshot 2025-01-05 003643.png'
import img8 from '../assets/Project3/Screenshot 2025-01-05 003902.png'
// import img7 from '../assets/screencapture-resturant-management-106b2-web-app-2025-01-04-21_33_04.png'
const Project3 = () => {
    return (
         <div>
                    <h1 className="text-2xl font-Kanit font-bold mb-6  text-center">Boost Career </h1>
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
                        <div>
                        <img src={img7} />
                            
                        </div>
                        <div>
                        <img src={img8} />
                            
                        </div>
                    </Carousel>
                    <div className="flex justify-center flex-wrap gap-5">
                        <button className="btn bg-blue-300 font-semibold text-xl"><a target="_blank"  className="text-white w-full h-full flex   items-center" href="https://career-counselling-c2f64.web.app/">Live Preview</a></button>
                        <button className="btn bg-blue-300 font-semibold text-xl"><a target="_blank"  className="text-white w-full h-full flex items-center" href="https://github.com/programming-hero-web-course1/b10-a9-authentication-nure-alam-riyal">Git Client</a></button>
                    {/* <button className="btn bg-blue-300 font-semibold text-xl"><a target="_blank"  className="text-white w-full h-full flex items-center"    href="https://github.com/programming-hero-web-course2/b10a11-server-side-nure-alam-riyal"></a>Git Server</button> */}
                        <button className="btn bg-blue-300 font-semibold text-xl"><a target="_blank"  className="text-white w-full h-full flex items-center" href="https://github.com/programming-hero-web-course1/b10-a9-authentication-nure-alam-riyal/blob/main/README.md">Details</a></button>
                    </div>
                    </div>
                </div>
    );
};

export default Project3;