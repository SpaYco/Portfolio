const ProjectCard = ({ project }) => (
  <div className="project-card">

    <div className="screenshot-container">
      <img src={`https://raw.githubusercontent.com/${project.full_name}/${project.default_branch}/screenshot.png`} alt={project.full_name} />
    </div>
    <div className="information-container">
      <h1>{project.name}</h1>
      <h2>{project.description}</h2>
      <div className="links">
        <a href={`https://github.com/${project.full_name}/`} target="_blank" rel="noreferrer">GitHub Repo</a>
        <a href={project.live_demo} target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
