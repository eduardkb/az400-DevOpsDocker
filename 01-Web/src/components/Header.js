import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="https://www.eduardkb.website" className="navbar-brand">
                Eduard KB
            </a>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/tutorials"} className="nav-link">
                        Tutorials
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/add"} className="nav-link">
                        Add
                    </Link>
                </li>
            </div>
        </nav>
    )
}
export default Header;