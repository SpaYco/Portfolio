import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const Main = () => (
  <main>
    <About />
    <Projects />
    <Resume />
    <Contact customClassName="card" />
  </main>
);

export default Main;
