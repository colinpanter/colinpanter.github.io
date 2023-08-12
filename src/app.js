import './App.css';

import { useState } from 'react';

import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import MyExperience from './components/MyExperience';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';

const SUPPORTED_LANGUAGES = new Set(['en', 'fr'])

function App() {
  const usrlang = (navigator.language || navigator.userLanguage).split("-")[0];
  const [language, setLanguage] = useState(SUPPORTED_LANGUAGES.has(usrlang) ? usrlang : 'en')
  const changeLanguage = (newLanguage) => {
    if (language !== newLanguage) {setLanguage(newLanguage)}
  };

  return (
    <div className="App">
      <meta name="viewport" content="width=1024"></meta>
      
      <NavBar changeLanguage={changeLanguage} language={language}/>
      <div id="content" className="snap-scroll">
        <AboutMe language={language}/>
        <MyExperience language={language}/>
        <MyProjects language={language}/>
        <ContactMe language={language}/>
      </div>
    </div>
  );
}

export default App;
