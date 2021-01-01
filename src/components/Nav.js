import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIdCard, faFile, faCode, faAt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Nav = ({ toggleMenu }) => (
  <nav className={`${toggleMenu ? 'show-menu' : ''}`}>
    <ul>
      <li>
        <Link activeClass="active" to="about" spy smooth offset={50} duration={500}>
          <FontAwesomeIcon icon={faIdCard} />
          <p>About Me</p>
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="projects" spy smooth offset={50} duration={500}>
          <FontAwesomeIcon icon={faCode} />
          <p>Projects</p>
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="resume" spy smooth offset={50} duration={500}>
          <FontAwesomeIcon icon={faFile} />
          <p>Resume</p>
        </Link>
      </li>
      <li>
        <Link activeClass="active" to="contact" spy smooth offset={50} duration={500}>
          <FontAwesomeIcon icon={faAt} />
          <p>Contact Me</p>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
