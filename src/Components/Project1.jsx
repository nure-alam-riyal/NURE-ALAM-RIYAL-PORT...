import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/Screenshot 2025-01-04 213626.png'
import img2 from '../assets/Screenshot 2025-01-04 213822.png'
import img3 from '../assets/Screenshot 2025-01-04 214447.png'
import img4 from '../assets/Screenshot 2025-01-04 214552.png'
import img5 from '../assets/Screenshot 2025-01-04 214804.png'
import img6 from '../assets/Screenshot 2025-01-04 215034.png'
// import img7 from '../assets/screencapture-resturant-management-106b2-web-app-2025-01-04-21_33_04.png'


const Project1 = () => {
    return (
        <div className="">
            <h1 className="text-2xl font-bold mb-6 font-Kanit  text-center">Riyal`s Cuisine</h1>
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
            <div className="flex justify-center text-white flex-wrap gap-5">
                <button className="btn bg-blue-300 font-semibold text-xl "><a className="w-full text-white h-full flex items-center" target="_blank" href="https://resturant-management-106b2.web.app/">Live Preview</a></button>
                <button className="btn bg-blue-300 font-semibold text-xl "><a className="w-full text-white h-full flex items-center" target="_blank" href="https://github.com/programming-hero-web-course2/b10a11-client-side-nure-alam-riyal">Git Client</a></button>
                <button className="btn bg-blue-300 font-semibold text-xl "><a className="w-full text-white h-full flex items-center" target="_blank" href="https://github.com/programming-hero-web-course2/b10a11-server-side-nure-alam-riyal">Git Server</a></button>
                <button className="btn bg-blue-300 font-semibold text-xl "><a className="w-full text-white h-full flex items-center" target="_blank" href="https://github.com/programming-hero-web-course2/b10a11-client-side-nure-alam-riyal/blob/main/README.md">Details</a></button>
            </div>
            </div>
        </div>
    );
};

export default Project1;