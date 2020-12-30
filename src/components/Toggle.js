import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Toggle = ({ setToggleMenu, toggleMenu }) => (
  <button type="button" id="toggle" onClick={() => setToggleMenu(!toggleMenu)}>
    <FontAwesomeIcon icon={faBars} />
  </button>
);

export default Toggle;
