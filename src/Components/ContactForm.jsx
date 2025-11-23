import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';
import Button from "../Components/Button"

export default function ContactForm() {
    const form = useRef();
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs.sendForm(
            'service_ex1iecp',
            'template_qh3wy1k',
            form.current,
            'P1jAoFT5XMkbRmnuG' 
        )
        .then(() => {
            setStatus("Message sent successfully!");
            e.target.reset();
        }, (error) => {
            setStatus("Failed to send message. Please try again.");
            console.log(error.text);
        });
    }

    return(
            <form ref={form} className="flex flex-col gap-4 w-[40vw]" onSubmit={handleSubmit}>
                <span className="flex align-center justify-between">
                    <label htmlFor="name">Name:</label>
                    <input className="w-100 max-w-100 text-bg p-1 bg-text rounded-lg" type="text" id="name" name="user_name" placeholder="Enter Name" required />
                </span>    
                <span className="flex align-center justify-between">
                    <label htmlFor="email">Email:</label>
                    <input className="w-100 max-w-100 text-bg p-1 bg-text rounded-lg" placeholder="Enter Email" type="email" id="email" name="user_email" required />
                </span> 
                <span className="flex align-top justify-between">
                    <label htmlFor="message">Message:</label>
                    <textarea className="w-100 h-50 max-w-100 text-bg p-1 bg-text rounded-lg" type="text" id="message" name="message" placeholder="Enter Message" required />
                </span> 
                <Button text="Send Message" type="submit" />
                {status && <p className="text-center mt-2">{status}</p>}
            </form>  
    )
};