// import all the icons from react-icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaServer, FaBootstrap, } from 'react-icons/fa';
import { SiJquery, SiMongodb, SiMysql, SiGraphql, SiExpress } from "react-icons/si";
import { DiResponsive } from "react-icons/di";

export default function Resume() {
    // Set up arrays of objects to hold the front-end and back-end proficiencies
    const frontEndProficiencies = [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3 /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'jQuery', icon: <SiJquery /> }, // 
        { name: 'Responsive Design', icon: <DiResponsive /> }, 
        { name: 'React', icon: <FaReact /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> }, 
    ];

    const backEndProficiencies = [
        { name: 'Node', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> }, 
        { name: 'MySQL, Sequelize', icon: <SiMysql /> },
        { name: 'MongoDB, Mongoose', icon: <SiMongodb /> },
        { name: 'REST', icon: <FaServer /> }, 
        { name: 'GraphQL', icon: <SiGraphql /> }, 
    ];

    return (
        <section className="p-4">
            <h2 className="text-center mb-4"> Resume</h2>
            {/*  add a link to download the resume */}
            <p className="text-center">
                <a href="Resume-Musa-Omar.pdf" download>Download My Resume</a>
            </p>
            {/*  add a section for front-end and back-end proficiencies and added styling */}
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="p-4 m-2">
                    <h3>Front-end Proficiencies</h3>
                    <ul>
                        {/* map through the front-end proficiencies and display them */}
                        {frontEndProficiencies.map((proficiency, index) => (
                            <li key={index}>
                                {proficiency.icon} {proficiency.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-4 m-2">
                    <h3>Back-end Proficiencies</h3>
                    <ul>
                        {/* map through the back-end proficiencies and display them */}
                        {backEndProficiencies.map((proficiency, index) => (
                            <li key={index}>
                                {proficiency.icon} {proficiency.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}