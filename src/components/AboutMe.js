import './AboutMe.css';

const texts = {
  en: {
    hi: "Hi, I am",
    summary: "Graduated in physics and software engineering, my passion for science blends seamlessly with my interest in computer science. My thirst for learning drives me to continuously explore new skills and tackle novel challenges.\n\nMy experience is primarily centered around machine learning and backend development. However, I remain open and enthusiastic about broadening my horizons by honing my skills in various other domains.\n\nMy journey reflects my commitment to innovation that I intend to maintain throughout my career. Furthermore, I am open to new opportunities regardless of their location."
  },
  fr: {
    hi: "Bonjour, je suis",
    summary: "Diplômé en physique et en génie logiciel, ma passion pour la science se marie harmonieusement avec mon intérêt pour l'informatique. Ma soif d'apprentissage me pousse à constamment explorer de nouvelles compétences et à relever des défis inédits.\n\nMon expérience se concentre principalement sur l'apprentissage machine et le développement de back-ends. Néanmoins, je reste ouvert et enthousiaste à élargir mes horizons en développant mes compétences dans divers autres domaines.\n\nMon parcours reflète un dévouement à l'innovation que j'ai l'intention de maintenir au cours de ma carrière. De plus, je suis ouvert aux nouvelles opportunités peu importe leur emplacement."
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