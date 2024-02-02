import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
    return (
       <section>
         <h2 className="text-center mb-4"> Contact Me</h2>
        <ul className="list-unstyled text-center">
            <li className="mb-2">
                <strong><FaEnvelope />Email:</strong> 
                <a href="mailto:musaomark01@gmail.com" className="text-decoration-none"> musaomark01@gmail.com</a>
            </li>
            <li>
                <strong><FaPhone />Phone:</strong> 
                <a href="tel:+1(269)213-0884" className="text-decoration-none"> +1(269)213-0884</a>
            </li>
        </ul>
       </section>
    );
}