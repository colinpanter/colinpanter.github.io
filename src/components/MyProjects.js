import './MyProjects.css';

function MyProjects({language}) {
  return (
    <div className="myprojects" id='projects'>
        <a style={{"text-decoration": "none"}} href="https://colinpanter.github.io/photoalgo/">
          <div class="project"><p>Photo Algo</p></div>
        </a>
    </div>
  );
}

export default MyProjects;