import { Slide } from "react-awesome-reveal";


const Title = ({title}) => {
    return (
        <div className="text-white  ">
           <Slide> <div className="text-center font-Lora mb-6 pt-[100px] uppercase font-bold text-3xl ">{title}</div></Slide>
            <div className="clip-path-title banner-bg h-16">

            </div>
        </div>
    );
};

export default Title;