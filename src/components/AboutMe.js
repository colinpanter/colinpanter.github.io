import './AboutMe.css';

const texts = {
  en: {
    hi: "Hi, I am",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  fr: {
    hi: "Bonjour, je suis",
    summary: "Diplomé en physique et en génie logiciel, je suis le meilleur, le plus intelligent et le plus beau"
  }
}


function AboutMe({language}) {
  const text = texts[language]
  return (
    <div className="aboutme" id="aboutme">
        <div className="title">
            <div>{text.hi}</div>
            <div id='name'>Colin Panter</div>
        </div>
        <div className="aboutme-text">
            <img src={require("../assets/portrait2.jpg")} height={"300px"} alt='' />
            <p>{text.summary}</p>
        </div>
    </div>
  );
}

export default AboutMe;