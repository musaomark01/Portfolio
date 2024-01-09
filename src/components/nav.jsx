import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const currentPage = useLocation().pathname;
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
                       <h1>Musa Omar</h1>
                    </Link>
                </li>
                <li>
                    <Link to="/aboutMe" className={currentPage === "/aboutMe" ? "nav-link active" : "nav-link"}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" className={currentPage === "/portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={currentPage === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/resume" className={currentPage === "/resume" ? "nav-link active" : "nav-link"}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}