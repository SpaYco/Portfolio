import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons';

const Contact = ({ customClassName }) => (
  <div id="contact" className={customClassName}>
    <div id="contact-list">
      <a href="mailto:zizou.aziz101@gmail.com" className="contact-btn" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} />
        {' '}
        Email
      </a>
      <a href="https://github.com/Spayco" className="contact-btn" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
        {' '}
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/spayco/" className="contact-btn" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
        {' '}
        LinkedIn
      </a>
      <a href="https://twitter.com/iSpaYco" className="contact-btn" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
        {' '}
        Twitter
      </a>
      <a href="https://angel.co/u/spayco" className="contact-btn" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faAngellist} />
        {' '}
        AngelList
      </a>
    </div>
  </div>
);

export default Contact;
