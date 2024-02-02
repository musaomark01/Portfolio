export default function AboutMe() {
    return (
        <section className="d-flex flex-column align-items-center text-center m-3">

            <h2 className="text-center mb-4"> About Me</h2>
            <img src="myImage.png" alt="Musa Omar"  
            style={{ 
                borderRadius: '50%', // Make the image round
                width: '75px', // Set the width to 100 pixels
                height: '75px', // Set the height to 100 pixels
            }} />

            <p className="text-center m-3">
                Hello, my name is <strong>Musa Omar</strong> and I am a <strong>Full Stack Web Developer</strong>.
                I have a passion for coding and love to create new experiences for users. I am a graduate of the 
                Michigan State University Coding Bootcamp and have experience with HTML, CSS, JavaScript, Node.js, 
                Express.js, React.js, MySQL, MongoDB, and more. I am a quick learner and am always looking to expand 
                my knowledge and skill set. I am thrilled about the future possibilities in technology and look 
                forward to contributing my skills to create meaningful solutions that enhance the way users interact 
                with the web.
            </p>
        </section>
    );
}