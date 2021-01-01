import styled from 'styled-components';
import notfound from '../media/notfound.jpg';

const ProjectCard = ({ project }) => (
  <StyledA
    project={project}
    href={`https://github.com/${project.full_name}`}
    className="project-card"
    target="_blank"
  >
    <h1>
      {project.name}
    </h1>
  </StyledA>
);

const StyledA = styled.a`
/* stylelint-disable */

background-image: url(https://raw.githubusercontent.com/${props => props.project.full_name}/${props => props.project.default_branch}/screenshot.png), url(${notfound});
background-size: 100% 100%;
background-repeat: no-repeat;
height: 25vh;
`;

export default ProjectCard;
