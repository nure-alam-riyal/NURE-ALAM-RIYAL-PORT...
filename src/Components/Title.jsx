import { Slide } from "react-awesome-reveal";


const Title = ({title}) => {
    return (
        <div className="  ">
           <Slide> <div className="text-center font-ranch mb-6 pt-[100px] uppercase font-bold text-3xl ">{title}</div></Slide>
            <div className="clip-path-title bg-red-300 h-16">

            </div>
        </div>
    );
};

export default Title;