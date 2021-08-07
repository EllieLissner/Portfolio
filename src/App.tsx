import React from 'react';
import './App.css';
import AboutMe from './Components/AboutMe';
import Header from './Components/Header'
import TechStack from './Components/TechStack';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <div className="sticky">
        <Header />
      </div>
      <AboutMe />
      <TechStack/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
