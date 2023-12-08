import React from 'react';
import ProjectItem from '../components/ProjectItem';
import '../styles/Projects.css';
import { ProjectList } from '../helper/ProjectList';


function Projects() { //a functional component for projects 
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => { //mapping each project with the props of projectitem to the projectlists array
          return <ProjectItem id={idx} name={project.name} image={project.image} />
        })}
      </div>
    </div>
  );
}

export default Projects;