import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoP from "../../assets/images/logo-p.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoP} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#09e1ec" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#09e1ec" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#09e1ec" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/pranav-vinodh-10a4962b5/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#09e1ec" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Pranav-Vinodh"
        >
          <FontAwesomeIcon icon={faGithub} color="#09e1ec" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/prnv0_5?igsh=MWVjOTh2N2hqM3IxMA=="
        >
          <FontAwesomeIcon icon={faInstagram} color="#09e1ec" />
        </a>
      </li>
    </ul>
  </div>
);
export default Sidebar;
