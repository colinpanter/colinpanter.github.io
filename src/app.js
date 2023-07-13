import './App.css';

import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import MyExperience from './components/MyExperience';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';

function App() {
  // const handleScroll = (event) => {
  //   console.log(event.currentTarget.scrollTop);
  // };

  return (
    <div className="App">
      <NavBar/>
      <div id="content" className="snap-scroll">
        <AboutMe/>
        <MyExperience/>
        <MyProjects/>
        <ContactMe/>
      </div>
    </div>
  );
}

export default App;
