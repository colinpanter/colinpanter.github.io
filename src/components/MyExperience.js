import './MyExperience.css';

import { useState } from 'react';
import en_resume from "../resume/en.pdf";
import fr_resume from "../resume/fr.pdf";



const texts = {
  en: {
    title: "My Background",
    resume: {title: "My Resume", ref: en_resume},
    jobs: [
      {
        id: "Desjardins",
        title: "Microservice Developper",
        type: "job",
        org: "Desjardins",
        location: "Lévis, QC",
        date: "May 2022 - May 2023",
        description: [
          "Work in an agile framework requiring coordination from multiple teams",
          "Develop, document and deploy services used by Desjardins' conversational robot",
          "Ensure the continuous deployment of services supported by the team",
        ],
        tech: "Java - Spring Boot - Node.js - Concourse CI"
      },
      {
        id: "CRDC",
        title: "Deep Learning Algorithms Developper",
        type: "job",
        org: "Defense Canada",
        location: "Valcartier, QC",
        date: "Fall 2021",
        description: [
          "Extend known techniques to different spectral bands : visible and near-infrared (VNIR), short-wave infrared (SWIR), long-wave infrared (LWIR)",
          "Develop deep learning algorithms for target identification on hyperspectral images",
          "Analyse large datasets to evaluate the performances of developed deep learning methods",
        ],
        tech: "Python - Pytorch"
      },
      {
        id: "CHUL",
        title: "Computer Vision Developper",
        type: "job",
        org: "CHUL",
        location: "Québec, QC",
        date: "Summer 2019",
        description: [
          "Develop and train a deep convolutionnal neural network and use diverse machine learning methods to identify and track différent points on a mouse’s hind legs in a video",
          "Collaboration with CHUL's neuroscience research center and the Computer Vision and Systems Laboratory of Laval University",
        ],
        tech: "Python - Pytorch"
      }
    ],
    education: {
      id: "University",
      title: "Education",
      type: "uni",
      diplomas: [
        {
          name: "B. Eng. Software Engineering",
          location: "Laval University",
          date: "2021-2023"
        },
        {
          name: "B. Sc. Physics",
          location: "Laval University",
          date: "2017-2020"
        }
      ]
    }
  },

  fr: {
    title: "Mon parcours",
    resume: {title: "Mon CV", ref: fr_resume},
    jobs: [
      {
        id: "Desjardins",
        title: "Développeur de microservices",
        type: "job",
        org: "Desjardins",
        location: "Lévis, QC",
        date: "Mai 2022 - Mai 2023",
        description: [
          "Travailler avec une approche agile demandant la coordination de plusieurs équipes",
          "Développer, documenter et livrer des services menant à l'amélioration du robot conversationnel de Desjardins",
          "Assurer le déploiement continu des services pris en charge par l'équipe",
        ],
        tech: "Java - Spring Boot - Node.js - Concourse CI"
      },
      {
        id: "CRDC",
        title: "Développeur d'algorithmes d'apprentissage profond",
        type: "job",
        org: "Défense Canada",
        location: "Valcartier, QC",
        date: "Automne 2021",
        description: [
          "Extension des techniques existantes à différentes bandes spectrales (visible et proche-infrarouge (VNIR), infrarouge à courte longueur d'onde (SWIR), infrarouge lointain (LWIR))",
          "Développement d'algorithmes d'apprentissage profond d'identification de cibles appliqués aux images hyperspectrales",
          "Traitement de grands ensembles de données dans le but d'évaluer les performances des méthodes d'apprentissage profond",
        ],
        tech: "Python - Pytorch"
      },
      {
        id: "CHUL",
        title: "Développeur en vision par ordinateur",
        type: "job",
        org: "CHUL",
        location: "Québec, QC",
        date: "Été 2019",
        description: [
          "Développer et entraîner une architecture à réseaux de neurones à convolution ainsi que diverses méthodes d'apprentissage machine afin de suivre différents points de la patte d’une souris dans un vidéo",
          "Collaboration entre l'axe des Neurosciences et les laboratoires de vision numérique de l'Université Laval",
        ],
        tech: "Python - Pytorch"
      }
    ],
    education: {
      id: "University",
      title: "Education",
      type: "uni",
      diplomas: [
        {
          name: "B. Ing. Génie logiciel",
          location: "Université Laval",
          date: "2021-2023"
        },
        {
          name: "B. Sc. Physique",
          location: "Université Laval",
          date: "2017-2020"
        }
      ]
    }
  }
}

function JobInfo({info}) {
  if (info.type === "uni") {
    return (
      <div className='experience-info education'>
        {info.diplomas.map((diploma,index)=>{
          return <div>
            <p className='job-title'>{diploma.name}</p>
            <div className='line'>
              <p>{diploma.location}</p>
              <p>{diploma.date}</p>
            </div>
          </div>
        })}
      </div>
    )
  }
  return (
    <div className='experience-info'>
      <p className='experience-date'>{info.date}</p>
      <p className='job-title'>{info.title}</p>
      <div className='line'>
        <p>{info.org}</p>
        <p>{info.location}</p>
      </div>
      <ul>
        {info.description.map((task,index)=>{
          return <li>{task}</li>
        })}
      </ul>
      <p className='job-tech'>{info.tech}</p>
    </div>
  )
}


function MyExperience({language}) {
  const text = texts[language]
  const [displayed, setDisplayed] = useState(texts[language].jobs[0].id)

  const jobs = {}
  jobs[text.education.id] = <JobInfo info={text.education}/>
  text.jobs.forEach(job => {
    jobs[job.id] = <JobInfo info={job}/>
  });

  return (
    <div className="myexperience" id='experience'>
      <p className='experience-title'>{text.title}</p>
      <div className="experience-container">
        <div class="choices">
        {text.jobs.map((job,index)=>{
          return <p className={displayed===job.id ? "active" : ""} onClick={()=>{setDisplayed(job.id)}}>{job.org}</p>
        })}
        <p className={displayed===text.education.id ? "active" : ""} onClick={()=>{setDisplayed(text.education.id)}}>{text.education.title}</p>
        </div>
        {jobs[displayed]}
      </div>
      <a className="experience-resume" href={text.resume.ref} target="_blank" rel="noreferrer">{text.resume.title}</a>
    </div>
  );
}

export default MyExperience;