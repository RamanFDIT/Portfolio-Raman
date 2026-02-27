import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import useReveal from "../hooks/useReveal";
import useSEO from "../hooks/useSEO";

const SERVICE_ID = "service_ur42y7f";
const TEMPLATE_ID = "template_wjustju";
const PUBLIC_KEY = "JGTmoxXpGqN_StC-I";

const ContactPage = () => {
    useSEO({
        title: "Contact — Raman's Studio",
        description: "Get in touch with Ramandeep Singh for project inquiries, collaborations, or just to say hi.",
        path: "/contact",
    });

    const sectionRef = useReveal({ y: 40, duration: 1, stagger: 0.2 });
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus("sent");
                formRef.current.reset();
                setTimeout(() => setStatus("idle"), 4000);
            })
            .catch(() => {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            });
    };

    return (
        <div className="flex flex-col items-center">
            <NavBar />
            <section
                ref={sectionRef}
                className="section w-full min-h-screen flex flex-col items-center justify-center px-4 py-24 lg:py-0 lg:h-screen"
            >
                <div className="max-w-400 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-20">
                    {/* Left — heading + subtext */}
                    <div className="flex flex-col gap-6 max-w-xl lg:pt-4">
                        <h1 data-reveal className="text-6xl md:text-8xl xl:text-[140px] font-semibold leading-tight">
                            Let's Talk
                        </h1>
                        <p data-reveal className="text-lg md:text-xl font-body leading-relaxed">
                            Have a project in mind, a question, or just want to say hi?
                            Drop me a message and I'll get back to you as soon as I can.
                        </p>
                        <p data-reveal className="text-base font-body opacity-50">
                            studio.ramandeep@gmail.com
                        </p>
                    </div>

                    {/* Right — form */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        data-reveal
                        className="flex flex-col gap-5 w-full max-w-lg"
                    >
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-body uppercase tracking-widest opacity-60">
                                Name
                            </label>
                            <input
                                type="text"
                                name="from_name"
                                required
                                className="w-full bg-transparent border-b-2 border-secondary/20 focus:border-secondary outline-none py-2 text-lg font-body transition-colors duration-300"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-body uppercase tracking-widest opacity-60">
                                Email
                            </label>
                            <input
                                type="email"
                                name="from_email"
                                required
                                className="w-full bg-transparent border-b-2 border-secondary/20 focus:border-secondary outline-none py-2 text-lg font-body transition-colors duration-300"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-body uppercase tracking-widest opacity-60">
                                Message
                            </label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-transparent border-b-2 border-secondary/20 focus:border-secondary outline-none py-2 text-lg font-body transition-colors duration-300 resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="self-start mt-2 flex items-center gap-3 bg-secondary text-textSecondary font-main text-lg px-8 py-3 border-none transition-colors ease-out duration-300 hover:bg-hoverColor hover:text-textPrimary cursor-pointer disabled:opacity-50 disabled:cursor-wait"
                        >
                            {status === "sending" ? (
                                "Sending..."
                            ) : status === "sent" ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Sent!
                                </>
                            ) : status === "error" ? (
                                "Failed — Try Again"
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ContactPage;
