import spider from '../assets/spider-green.svg';

export default function Hero() {
    return(
        
        <section 
            className="flex bg-no-repeat bg-center min-h-[93vh] w-full max-w-375 flex-col justify-between items-center overflow-hidden m-auto py-20 md:py-0" 
            id="hero"
            style={{ backgroundImage: `url(${spider})`, backgroundSize: 'clamp(300px, 35%, 500px)' }}
        >
            <div></div>
            <div className = "flex flex-col items-center gap-8 px-5">
                <h1 className="text-3xl md:text-5xl text-center">Your Friendly Neighborhood <span className="text-primary">RA-MAN</span></h1>
                <div>
                    <p className ="text-center text-xl md:text-2xl">Hello, I am Ramandeep Singh</p>
                    <p className="text-center text-lg md:text-2xl max-w-2xl leading-relaxed mt-4">
                        I architect <span className="text-primary">AI-integrated web applications</span> and 
                        build high-fidelity <span className="text-primary">Design Systems</span> that bridge the 
                        gap between Figma and production-ready React code.
                    </p>
                </div>
            </div>
            <div className="mb-10 md:mb-0">
                <a href = "#projects" className = "text-center text-md">Explore my <span className="text-primary">Projects</span></a>
            </div>
        </section>
    );
}; 