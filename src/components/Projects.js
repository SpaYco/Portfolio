import { v4 as uuidv4 } from 'uuid';
import Title from './Title';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const Projects = () => (
  <div id="projects" className="card">
    <Title title="Projects" />
    <div id="project-list">
      {projects.map(project => (<ProjectCard key={uuidv4()} project={project} />))}
    </div>
  </div>
);

export default Projects;
