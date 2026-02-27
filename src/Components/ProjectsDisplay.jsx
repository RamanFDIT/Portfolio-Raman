import EDITH from "../assets/EDITH.png";
import Ascend from "../assets/Ascend.svg";
import COV from "../assets/COVL.svg";
import ProjectSpace from "./ProjectSpace";

const ProjectDisplay = () => {
    const cardInfos = [
        {
            id : "1",
            src : EDITH,
            label : "E.D.I.T.H",
            description : "An AI-integrated capstone application built from the ground up.",
            link : "/projects/edith",
        },
        {
            id : "2",
            src : Ascend,
            label : "Ascend",
            description : "A platform designed to help users track and elevate their goals.",
            link : "/projects/ascend",
        },
        {
            id : "3",
            src : COV,
            label : "Dashboard",
            description : "A data-driven City of Vancouver analytics dashboard.",
            link : "/projects/dashboard",
        }
    ];
    return(
        <div className="flex flex-col md:flex-row flex-wrap justify-center lg:justify-between gap-6 lg:gap-4 w-full lg:w-310">
            {cardInfos.map((info) => (
                <ProjectSpace key = {info.id} src = {info.src} label = {info.label} description = {info.description} link = {info.link} />
            ))}
        </div>
    );
};

export default ProjectDisplay;