import { useState } from 'react';
import Nav from './Nav';
import Main from './Main';
import Toggle from './Toggle';
import Background from './Background';
import '../styles/App.scss';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Background />
      <Toggle toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Nav toggleMenu={toggleMenu} />
      <Main />
    </>
  );
}

export default App;
