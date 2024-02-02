export default function Footer() {
    const linkedinLink = () => {
        window.open("https://www.linkedin.com/resume-builder/urn:li:fsd_memberResume:61265297/");
    };
    const githubLink = () => {
        window.open("https://github.com/musaomark01");
    };

    const footerLogoStyle = {
        width: '50px', // Set the width to 50 pixels
        height: '50px', // Set the height to 50 pixels
        objectFit: 'cover', // Cover the entire div with the image
         cursor: 'pointer', // Change the cursor to a pointer
        margin: '20px', // Add a margin of 20 pixels
        borderRadius: '10px', // Make the corners round
        backgroundColor: 'white', // Make the background white

    };
    return (
        <footer className="d-flex justify-content-center py-3">
            <img src="/LI-In-Bug.png" alt="link to Linkedin" onClick={linkedinLink} style={footerLogoStyle}/>
            <img src="/github-mark.png" alt="link to GitHub" onClick={githubLink} style={footerLogoStyle}/>
        </footer>
    );
}