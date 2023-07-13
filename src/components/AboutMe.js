import './AboutMe.css';

function AboutMe() {
  return (
    <div className="aboutme">
        <div className="title">
            <div>Hi, I am</div>
            <div id='name'>Colin Panter</div>
        </div>
        <div className="aboutme-text">
            <img src={require("../assets/portrait2.jpg")} height={"300px"} alt='' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
  );
}

export default AboutMe;