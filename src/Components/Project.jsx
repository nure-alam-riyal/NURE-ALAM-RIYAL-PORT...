import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import ProjectLatest from "./ProjectLatest";


const Project = () => {
    return (
        <div>
            <div className="space-y-20">
                <ProjectLatest></ProjectLatest>
                <Project1></Project1>
                <Project2></Project2>
                {/* <Project3></Project3> */}
            </div>
        </div>
    );
};

export default Project;