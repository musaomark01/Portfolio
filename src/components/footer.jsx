export default function Footer() {
    const linkinLink = () => {
        window.open("https://www.linkedin.com/resume-builder/urn:li:fsd_memberResume:61265297/");
    };
    const githubLink = () => {
        window.open("https://github.com/musaomark01");
    };
    return (
        <footer>
            <img src="/LI-In-Bug.png" alt="link to Linkedin" onClick={linkinLink} />
            <img src="/github-mark.png" alt="link to GitHub" onClick={githubLink} />
        </footer>
    );
}
