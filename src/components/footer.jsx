export default function Footer() {
    const linkinLink = () => {
        window.open("https://www.linkedin.com/resume-builder/urn:li:fsd_memberResume:61265297/");
    };
    const githubLink = () => {
        window.open("https://github.com/musaomark01");
    };
    return (
        <footer className="d-flex justify-content-center py-3">
            <img src="/LI-In-Bug.png" alt="link to Linkedin" onClick={linkinLink} 
            style={{width: '50px', height: '50px', objectFit: 'cover', cursor: 'pointer', margin: '20px',
            border: '3px solid black', // Add a black border
            borderRadius: '10px', // Make the corners round
            boxShadow: '5px 5px 10px 10px', // Add a shadow
         }}/>
            <img src="/github-mark.png" alt="link to GitHub" onClick={githubLink} 
            style={{width: '50px', height: '50px', objectFit: 'cover', cursor: 'pointer', margin: '20px',
            border: '3px solid black', // Add a black border
            borderRadius: '10px', // Make the corners round
            boxShadow: '5px 5px 10px 10px', // Add a shadow
         }}/>
        </footer>
    );
}
