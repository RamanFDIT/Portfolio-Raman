
export default function SkillCard({icon, title, desc, skills}) {
    return(
        <div className="w-102.5 h-84 border-text border-2 rounded-3xl flex flex-col justify-around items-start p-5 gap-5 hover: transform hover:scale-105 transition-transform duration-300">
            <img src={icon} loading="lazy" alt={title}></img>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-lg">{desc}</p>
            <p className="text-lg text-primary">{skills}</p>
        </div>
    )
}