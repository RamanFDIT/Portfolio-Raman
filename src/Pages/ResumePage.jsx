import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import useReveal from "../hooks/useReveal";
import resumePreview from "../assets/resume-preview.png";

const ResumePage = () => {
    const sectionRef = useReveal({ y: 40, duration: 1, stagger: 0.2 });

    return (
        <div className="flex flex-col items-center">
            <NavBar />
            <section
                ref={sectionRef}
                className="section w-full min-h-screen flex flex-col items-center justify-center px-4 py-24 lg:py-0 lg:h-screen"
            >
                <div className="max-w-400 w-full flex flex-col lg:flex-row items-center lg:items-center justify-center gap-10 lg:gap-20">
                    {/* Left side — heading + download */}
                    <div className="flex flex-col gap-6 items-start">
                        <h1 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold leading-tight">
                            Resume
                        </h1>
                        <a data-reveal href="/resume.pdf" download="Ramandeep_Singh_Resume.pdf">
                            <button className="flex items-center gap-3 bg-secondary text-textSecondary font-main text-lg px-8 py-3 border-none transition-colors ease-out duration-300 hover:bg-hoverColor hover:text-textPrimary cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                                </svg>
                                Download
                            </button>
                        </a>
                    </div>

                    {/* Right side — resume preview image */}
                    <div data-reveal className="w-full max-w-md lg:max-w-lg aspect-[8.5/11] shadow-lg overflow-hidden border border-secondary/10">
                        <img
                            src={resumePreview}
                            alt="Resume Preview"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ResumePage;
