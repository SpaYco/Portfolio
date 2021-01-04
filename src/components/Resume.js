import Title from './Title';

const Resume = () => (
  <div id="resume" className="card">
    <Title title="Resume" />

    <p id="resume-text">
      you can check my resume
      {' '}
      <a href="https://docs.google.com/document/d/1lYq0Kb50TujzJzDWGobIchRI17JMnAiZMF9OBQgNU68/edit?usp=sharing" target="_blank" rel="noreferrer">here</a>
    </p>
  </div>
);

export default Resume;
