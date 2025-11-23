import ContactForm from "../Components/ContactForm"
import Socials from "../Components/Socials"

export default function Contact() {
    return(
        <section className="max-w-375 mx-auto flex gap-10 justify-between items-start py-20 px-10" id="contact">
            <div>
                <h2 className="text-left text-3xl font-semibold text-primary mb-2">Socials</h2>
                <Socials />
            </div>
            <div>
                <h2 className="text-center text-3xl font-semibold text-primary mb-2">Contact</h2>
                <ContactForm />
            </div>
        </section>
    )
}