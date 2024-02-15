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
            Recent graduate from the Michigan State University Coding Bootcamp with a passion for Full Stack Web Development. 
            Proficient in HTML, CSS, JavaScript, Node.js, Express.js, React.js, MySQL, MongoDB, and more. 
            Experienced in optimizing productivity and maintaining quality standards through effective collaboration and problem-solving. 
            Eager to leverage my skills and commitment to continuous learning to contribute to innovative web solutions.
            </p>
        </section>
    );
}