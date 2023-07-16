import './NavBar.css';


const texts = {
  en: {
    aboutMe: "About Me",
    experience: "My Experience",
    projects: "My Projects",
    contactMe: "Contact Me"
  },
  fr: {
    aboutMe: "À propos",
    experience: "Mon expérience",
    projects: "Mes projets",
    contactMe: "Contactez moi"
  }
}


function NavBar({changeLanguage, language}) {
  const text = texts[language]
  return (
    <div className="navbar">
      <div className="left">
        <p className={language !== "fr" ? 'hoverable' : 'active'} onClick={() => {changeLanguage("fr")}}>FR</p>
        <p className={language !== "en" ? 'hoverable' : 'active'} onClick={() => {changeLanguage("en")}}>EN</p>
      </div>
      <div className="right">
        <p className='hoverable' onClick={() => window.location.replace("/#aboutme")}>{text.aboutMe}</p>
        <p className='hoverable' onClick={() => window.location.replace("/#experience")}>{text.experience}</p>
        <p className='hoverable' onClick={() => window.location.replace("/#projects")}>{text.projects}</p>
        <p className='hoverable' onClick={() => window.location.replace("/#contactme")}>{text.contactMe}</p>
      </div>
    </div>
  );
}

export default NavBar;