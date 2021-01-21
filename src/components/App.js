import { useState } from 'react';
import GA4React from 'ga-4-react';
import Nav from './Nav';
import Main from './Main';
import Toggle from './Toggle';
import Background from './Background';
import '../styles/App.scss';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const ga4react = new GA4React('259604302');

  ga4react.initialize().then(ga4 => {
    ga4.pageview('path');
    ga4.gtag('event', 'pageview', 'path'); // or your custom gtag event
  }, err => err);

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
