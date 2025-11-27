export default function Socials() {
    const socialLinks = [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/ramandeep-singh-studio/" },
        { name: "GitHub", url: "https://github.com/RamanFDIT" },
        { name: "Twitter", url: "#" },
        { name: "Instagram", url: " " }
    ];

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Connect with me on:</h3>
            {socialLinks.map((social, index) => (
                <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xl text-link transform hover:scale-105 transition-transform duration-300"
                >
                    {social.name}
                </a>
            ))}
        </div>
    );
}
