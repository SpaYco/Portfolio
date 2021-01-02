import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Title from './Title';

const skills = ['Front-end development: ReactJS', 'Back-end development: Ruby on Rails', 'Databases: MySql', 'Infra: Netlify | Heroku', 'Styling: CSS| SASS | MaterializeCSS | Bootstrap', 'Remote and Collaborative work experience'];

const About = () => (
  <div id="about" className="card">
    <Title title="About Me" />
    <p className="description">
      a skilled Full-Stack Web Developer who loves making good UI Pages,
      Studied at Microverse remotely and experienced in remote work
      <br />
      During my 1 year of experience in making personal projects on my GitHub, I&apos;ve learned:
      <ul>
        {skills.map(skill => (
          <li key={uuidv4()}>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
            {' '}
            {skill}
          </li>
        ))}
      </ul>
      <br />
      Find My Social Links in the
      {' '}
      <Link activeClass="active" to="contact" spy smooth offset={50} duration={1500}><p className="smooth-link">Contact</p></Link>
      {' '}
      section
    </p>
  </div>
);

export default About;
