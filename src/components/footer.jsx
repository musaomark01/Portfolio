import linkedinImage from '../assets/images/LI-In-Bug.png';
import githubImage from '../assets/images/github-mark.png';

export default function Footer() {
    const linkinLink = () => {
        window.open("https://www.linkedin.com/resume-builder/urn:li:fsd_memberResume:61265297/");
    };
    const githubLink = () => {
        window.open("https://github.com/musaomark01");
    };
    return (
        <footer>
            <img src={linkedinImage} alt="link to Linkedin" onClick={linkinLink} />
            <img src={githubImage} alt="link to GitHub" onClick={githubLink} />
        </footer>
    );
}
