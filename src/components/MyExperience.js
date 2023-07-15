import './MyExperience.css';

import { useState } from 'react';


const experiences = [
  {
    name: "Test 1",
    date: "2022-2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Test 2",
    date: "2022-2024",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
]


function MyExperience({language}) {
  const [displayed, setDisplayed] = useState(experiences[0])

  return (
    <div className="myexperience">
        <div class="choices">
        {experiences.map((item,index)=>{
          return <p className={displayed.name===item.name ? "active" : ""} onClick={()=>{setDisplayed(item)}}>&gt; {item.name}</p>
        })}
        </div>
        <div class="description">{displayed.description}</div>
    </div>
  );
}

export default MyExperience;