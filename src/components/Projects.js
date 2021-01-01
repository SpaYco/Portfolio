import { useState, useEffect } from 'react';
import Title from './Title';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [lists, setLists] = useState([]);

  useEffect(async () => {
    const syncedList = fetch('https://api.github.com/users/SpaYco/repos?sort=pushed').then(response => response.json());
    setLists(await syncedList);
  }, []);

  return (
    <div id="projects" className="card">
      <Title title="Projects" />
      {lists.map(project => (<ProjectCard key={project.id} project={project} />))}
    </div>
  );
};

export default Projects;
