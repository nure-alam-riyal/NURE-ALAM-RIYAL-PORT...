import { Fade } from "react-awesome-reveal";


const Education = () => {
    return (
        <div  className="grid grid-cols-1 text-black  md:flex md:justify-center md:flex-wrap lg:grid lg:grid-cols-3 gap-6">
            <Fade direction="left">
            <div className="card md:flex-1 z-40 education-bg  clip-path-education shadow-xl">
                <div className="card-body font-bold text-center">
                    <h2 className="text-xl ">Graduation</h2>
                    <p>Institute of Information Technology</p>
                    <p>Jahangirnagor University</p>
                    <p>Passing Year:2023-Running</p>
                    <p>CGPA:3.63/4.00</p>
                </div>
            </div>
            </Fade>
            <Fade direction="down">
            <div className="card md:flex-1 h-full w-full education-bg  clip-path-education shadow-xl">
                <div className="card-body font-bold  text-center">
                    <h2 className=" text-xl ">HSC</h2>
                    <p>Science</p>
                    <p>Birganj Goverment College</p>
                    <p>Passing Year:2021</p>
                    <p>CGPA:5.00/5.00</p>
                </div>
            </div>
            </Fade>
            <Fade direction="right">
            <div className="card  education-bg  clip-path-education  shadow-xl">
                <div className="card-body  font-bold text-center">
                    <h2 className="text-xl ">SSC</h2>
                    <p>Science</p>
                    <p>Birganj Pilot Goverment High School</p>
                    <p>Passing Year:2019</p>
                    <p>CGPA:5.00/5.00</p>
                </div>
            </div>
            </Fade>

        </div>
    );
};

export default Education;