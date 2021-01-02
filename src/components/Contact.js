import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithubAlt,
  faTwitter,
  faLinkedin,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons';
import Title from './Title';

const Contact = () => (
  <div id="contact" className="card">
    <Title title="Contact" />
    <div id="contact-list">
      <a href="mailto:zizou.aziz101@gmail.com" className="contact-btn" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} />
        {' '}
        Email
      </a>
      <a href="link.com" className="contact-btn" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faGithubAlt} />
        {' '}
        GitHub
      </a>
      <a href="link.com" className="contact-btn" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
        {' '}
        LinkedIn
      </a>
      <a href="link.com" className="contact-btn" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
        {' '}
        Twitter
      </a>
      <a href="link.com" className="contact-btn" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faAngellist} />
        {' '}
        AngelList
      </a>
    </div>
  </div>
);

export default Contact;
