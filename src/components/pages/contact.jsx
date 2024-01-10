export default function Contact() {
    return (
       // until I have a backend to connect to, I will use just leave my contact info for now
       /*
       <section>
            <form>
                <h2> Contact Me</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" />
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" />
                <button type="submit">Submit</button>
            </form>
        </section>
        */
       <section>
         <h2 className="text-center mb-4"> Contact Me</h2>
        <ul className="list-unstyled text-center">
            <li className="mb-2">
                <strong>Email:</strong> 
                <a href="mailto:musaomark01@gmail.com" className="text-decoration-none"> musaomark01@gmail.com</a>
            </li>
            <li>
                <strong>Phone:</strong> 
                <a href="tel:+1(269)213-0884" className="text-decoration-none"> +1(269)213-0884</a>
            </li>
        </ul>
       </section>
    );
}

