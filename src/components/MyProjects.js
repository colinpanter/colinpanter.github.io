import './MyProjects.css';


import { ExternalLinkLogo, GithubLogo } from './logos';


function ProjectCard({link, name, description, tech, ghlink=null}) {
  return (
  <a className='project-card' href={link}>
    <div className="project">
      <p className="project-name">{name}</p>
      <p className="project-desc">{description}</p>
      <p className="project-tech">{tech}</p>
      <a rel="noreferrer" target='_blank' href={link} className='ext-link'><ExternalLinkLogo size={"20px"}/></a>
      <a rel="noreferrer" target='_blank' href={ghlink} className='gh-link'><GithubLogo size={"25px"}/></a>
    </div>
  </a>
  );
}

const texts = {
  en: {
    title: "Some of my projects",
    website: {
      title: "Personal Website",
      description: "This website!",
    },
    photoalgo: {
      title: "Algorithmic Photography",
      description: "A collection of studies on various image manipulation methods done during a course. (French only)",
    },
    bestagon: {
      title: "Bestagons",
      description: "A visual implementation of different pathfinding algorithms on an hexagonal grid.",
    }
  },
  fr: {
    title: "Certains de mes projets",
    website: {
      title: "Site personnel",
      description: "Ce site!",
    },
    photoalgo: {
      title: "Photographie algorithmique",
      description: "Une collection d'études d'une variété de méthode de manipulation d'images faite dans le cadre d'un cours.",
    },
    bestagon: {
      title: "Bestagons",
      description: "Une implémentation visuelle de différents algorithmes de pathfinding sur une grille hexagonale.",
    }
  }
}


function MyProjects({language}) {
  const text = texts[language]
  return (
    <div className="myprojects" id='projects'>
      <p className='project-title'>{text.title}</p>
      <div className='project-container'>
        <ProjectCard
          link={"https://colinpanter.com"}
          ghlink={"https://github.com/colinpanter/colinpanter.github.io"}
          name={text.website.title}
          description={text.website.description}
          tech={"React"}
        />
        <ProjectCard
          link={"https://colinpanter.github.io/photoalgo/"}
          ghlink={"https://github.com/colinpanter/photoalgo"}
          name={text.photoalgo.title}
          description={text.photoalgo.description}
          tech={"Python - Math"}
        />
        <ProjectCard
          link={"https://colinpanter.github.io/bestagon/"}
          ghlink={"https://github.com/colinpanter/bestagon"}
          name={text.bestagon.title}
          description={text.bestagon.description}
          tech={"React - Pathfinding"}
        />
      </div>
    </div>
  );
}

export default MyProjects;