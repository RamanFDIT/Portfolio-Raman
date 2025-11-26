import spider from '../assets/spider-green.svg';

export default function Hero() {
    return(
        
        <section 
            className="flex bg-no-repeat bg-center h-[93vh] min-w-139 max-w-375 flex-col justify-between items-center overflow-hidden m-auto" 
            id="hero"
            style={{ backgroundImage: `url(${spider})`, backgroundSize: '35%' }}
        >
            <div></div>
            <div className = "flex flex-col items-center gap-8">
                <h1 className="text-5xl">Your Friendly Neighborhood <span className="text-primary">RA-MAN</span></h1>
                <div>
                    <p className ="text-center text-2xl">Hello, I am Ramandeep Singh</p>
                    <p className ="text-center text-2xl">I am a <span className="text-primary">UI/UX Designer</span> and a <span className="text-primary">Front-End Web Developer</span></p>
                </div>
            </div>
            <div>
                <a href = "#projects" className = "text-center text-md">Explore my <span className="text-primary">Projects</span></a>
            </div>
        </section>
    );
}; 