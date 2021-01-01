import { useState, useEffect } from 'react';
import Title from './Title';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [lists, setLists] = useState([]);

  useEffect(async () => {
    const syncedList = fetch('https://api.github.com/users/SpaYco/repos?sort=updated').then(response => response.json());
    setLists(await syncedList);
  }, []);

  return (
    <div id="projects" className="card">
      <Title title="Projects" />
      <div id="project-list">
        {lists.map(project => (<ProjectCard key={project.id} project={project} />))}
      </div>
    </div>
  );
};

export default Projects;
