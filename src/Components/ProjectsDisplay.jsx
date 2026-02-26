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
        },
        {
            id : "2",
            src : Ascend,
            label : "Ascend",
            description : "A platform designed to help users track and elevate their goals.",
        },
        {
            id : "3",
            src : COV,
            label : "Dashboard",
            description : "A data-driven City of Vancouver analytics dashboard.",
        }
    ];
    return(
        <div className="flex justify-between w-310">
            {cardInfos.map((info) => (
                <ProjectSpace key = {info.id} src = {info.src} label = {info.label} description = {info.description} />
            ))}
        </div>
    );
};

export default ProjectDisplay;