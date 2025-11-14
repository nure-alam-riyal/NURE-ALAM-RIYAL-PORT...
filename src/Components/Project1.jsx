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
            <h1 className="text-2xl font-bold mb-6 font-Kanit  text-center">Riyal`s Cuisine</h1>
            <div>
                <p className="w-10/12 mx-auto text-center my-7">
                Riyal's Cuisine Restaurant is a MERN stack-based restaurant management system that enhances customer experience and simplifies restaurant operations. Customers can browse menus, place orders, track order status, and manage their purchase history. Restaurant owners can add, update, and manage food items, track real-time orders, and analyze sales per item.
                </p>
            </div>
            <div className="flex justify-center text-black space-x-3 flex-wrap">
                        <div className="rounded-badge px-3 py-1 mt-4 bg-green-200">  React.js </div>
                        {/* <div className="rounded-badge px-3 py-1 mt-4 bg-red-200">  TanStack Query </div> */}
                        <div className="rounded-badge px-3 py-1 mt-4 bg-orange-200"> Firebase   </div>
                        <div className="rounded-badge px-3 py-1 mt-4 bg-blue-200">  Axios </div>
                        <div className="rounded-badge px-3 py-1 mt-4 bg-red-700"> DaisyUI </div>
                        <div className="rounded-badge px-3 py-1 mt-4 bg-orange-500">  TailwindCSS </div>
                        {/* <div className="rounded-badge px-3 py-1 mt-4 bg-gray-300">  Ant Design </div>
                        <div className="rounded-badge px-3 py-1 mt-4 bg-yellow-200">  Stripe </div> */}
                       </div>
            <div className="flex justify-center text-white mt-4 flex-wrap gap-5">
                <button className="btn education-bg font-semibold text-xl "><a className="w-full text-gray-600 h-full flex items-center" target="_blank" href="https://resturant-management-106b2.web.app/">Live Preview</a></button>
                <button className="btn education-bg font-semibold text-xl "><a className="w-full text-gray-600 h-full flex items-center" target="_blank" href="https://github.com/nure-alam-riyal/Riyal-s-Cuisine-client-side">Git Client</a></button>
                <button className="btn education-bg font-semibold text-xl "><a className="w-full text-gray-600 h-full flex items-center" target="_blank" href="https://github.com/nure-alam-riyal/Riyal-s-Cuisine-sever-side">Git Server</a></button>
                <button className="btn education-bg font-semibold text-xl "><a className="w-full text-gray-600 h-full flex items-center" target="_blank" href="https://github.com/nure-alam-riyal/Riyal-s-Cuisine-client-side/blob/main/README.md">Details</a></button>
            </div>
            </div>
        </div>
    );
};

export default Project1;