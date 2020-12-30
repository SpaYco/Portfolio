import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faFile, faCode, faAt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Nav = ({ toggleMenu }) => (
  <nav className={`${toggleMenu ? 'show-menu' : ''}`}>
    <ul>
      <li name="About Me">
        <Link activeClass="active" to="about" spy smooth offset={50} duration={500}><FontAwesomeIcon icon={faHome} /></Link>
      </li>
      <li name="Projects">
        <Link activeClass="active" to="projects" spy smooth offset={50} duration={500}><FontAwesomeIcon icon={faCode} /></Link>
      </li>
      <li name="Resume">
        <Link activeClass="active" to="resume" spy smooth offset={50} duration={500}><FontAwesomeIcon icon={faFile} /></Link>
      </li>
      <li name="Contact Me">
        <Link activeClass="active" to="contact" spy smooth offset={50} duration={500}><FontAwesomeIcon icon={faAt} /></Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
