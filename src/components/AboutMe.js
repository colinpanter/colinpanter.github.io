import './AboutMe.css';

const texts = {
  en: {
    hi: "Hi, I am",
    summary: "Graduated in physics and software engineering, my passion for science blends seamlessly with my interest in computer science. My thirst for learning drives me to continuously explore new skills and tackle novel challenges. My experience is primarily centered around machine learning and backend development. However, I remain open and enthusiastic about broadening my horizons by honing my skills in various other domains. My journey reflects my commitment to excellence and innovation."
  },
  fr: {
    hi: "Bonjour, je suis",
    summary: "Diplômé en physique et en génie logiciel, ma passion pour la science se marie harmonieusement avec mon intérêt pour l'informatique. Ma soif d'apprentissage me pousse à constamment explorer de nouvelles compétences et à relever des défis inédits. Mon expérience se concentre principalement sur l'apprentissage machine et le développement de back-ends. Néanmoins, je reste ouvert et enthousiaste à élargir mes horizons en développant mes compétences dans divers autres domaines. Mon parcours reflète mon dévouement à l'excellence et à l'innovation."
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
            <img src={require("../assets/portrait.jpg")} height={"300px"} alt='' />
            <p>{text.summary}</p>
        </div>
    </div>
  );
}

export default AboutMe;