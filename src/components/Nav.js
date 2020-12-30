import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faFile, faCode, faAt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Nav = ({ toggleMenu }) => (
  <nav className={`${toggleMenu ? 'show-menu' : ''}`}>
    <ul>
      <li name="About Me">
        <FontAwesomeIcon icon={faHome} />
      </li>
      <li name="Projects">
        <FontAwesomeIcon icon={faCode} />
      </li>
      <li name="Resume">
        <FontAwesomeIcon icon={faFile} />
      </li>
      <li name="Contact Me">
        <FontAwesomeIcon icon={faAt} />
      </li>
    </ul>
  </nav>
);

export default Nav;
