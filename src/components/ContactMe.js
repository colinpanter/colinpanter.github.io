import './ContactMe.css';

import { EmailLogo, LinkedInLogo, GithubLogo } from './logos';


const texts = {
  en: {
    title: "Reach out to me"
  },
  fr: {
    title: "Rejoignez moi"
  }
}

function ContactMe({language}) {
  const text = texts[language]
  return (
    <div className="contactme" id='contactme'>
      <p className='reachout'>{text.title}</p>
      <div className='links'>
        <a className='link' href='mailto:colinpanter1@gmail.com'>
          <EmailLogo size={"40px"}/>
          <p>colinpanter1@gmail.com</p>
        </a>
        <a className='link' href='https://www.linkedin.com/in/colin-panter/' rel="noreferrer" target='_blank'>
          <LinkedInLogo size={"40px"}/>
          <p>linkedin.com/in/colin-panter</p>
        </a>
        <a className='link' href='https://github.com/colinpanter' rel="noreferrer" target='_blank'>
          <GithubLogo size={"40px"}/>
          <p>github.com/colinpanter</p>
        </a>
      </div>
    </div>
  );
}

export default ContactMe;