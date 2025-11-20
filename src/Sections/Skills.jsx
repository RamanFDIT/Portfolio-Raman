import SkillCard from "../Components/SkillCard";
import figma from "../assets/Figma.png";
import frontend from "../assets/Frontend.png";
import visual from "../assets/VisualDesign.png";
import mobile from "../assets/MobileDesign.png";
import web from "../assets/WebTechnologies.png";
import perf from "../assets/Performance.png";

export default function Skills() {
    const skillsData = [
        {
            id: 1,
            icon : figma,
            title : "UI/UX Design",
            desc : "Designing user-friendly interfaces and experiences for web and mobile applications.",
            skills : "Figma, Adobe XD, Sketch, User Research, Wireframing, Prototyping"
        },
        {
            id: 2,
            icon : frontend,
            title : "Frontend Development",
            desc : "Building responsive and interactive user interfaces for web applications.",
            skills : "React, Tailwind CSS"
        },
        {
            id: 3,
            icon : visual,
            title : "Visual Design",
            desc : "Creating visually appealing and effective designs for digital and print media.",
            skills : "Design Systems, Branding, Typography, Color Theory"
        },
        {
            id: 4,
            icon : mobile,
            title : "Mobile Design",
            desc : "Designing mobile-first experiences for iOS and Android applications.",
            skills : "iOS Design, Android Design, Responsive Design"
        },
        {
            id: 5,
            icon : web,
            title : "Web Technologies",
            desc : "Leveraging modern web technologies and frameworks.",
            skills : "React, HTML, CSS, JavaScript, Git"
        },
        {
            id: 6,
            icon : perf,
            title : "Performance Optimization",
            desc : "Improving the speed and efficiency of web applications.",
            skills : "Performance Auditing, Code Splitting, Lazy Loading, Caching"
        },
    ];
    return(
        <section className="max-w-375 mx-auto flex flex-col gap-10 items-center py-20" id="skills">
            <h2 className="text-center text-3xl font-semibold text-primary">Skills</h2>
            <div className="flex flex-wrap justify-center gap-10 w-full max-w-375 px-10 mx-auto">
                {skillsData.map((skill) => (
                    <SkillCard 
                    key = {skill.id}
                    icon = {skill.icon}
                    title = {skill.title}
                    desc = {skill.desc}
                    skills = {skill.skills}
                />
                )
                )}
            </div>
        </section>
    );
}