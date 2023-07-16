import './MyProjects.css';

function MyProjects({language}) {
  return (
    <div className="myprojects" id='projects'>
        <a style={{"text-decoration": "none"}} href="https://colinpanter.github.io/photoalgo/">
          <div className="project">
            <p className="project-name">Photo Algo</p>
            <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="project-tech">Python - Math</p>
          </div>
        </a>
        <a style={{"text-decoration": "none"}} href="https://colinpanter.github.io/bestagon/">
          <div className="project">
            <p className="project-name">Bestagons</p>
            <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="project-tech">React - Pathfinding</p>
          </div>
        </a>
    </div>
  );
}

export default MyProjects;