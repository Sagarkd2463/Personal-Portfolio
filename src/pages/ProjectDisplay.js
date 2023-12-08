import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helper/ProjectList';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() { //a functional component for displaying each project details 
    const { id } = useParams(); //a hook that gives each project its id 
    const project = ProjectList[id]; //passing id for each project present into the array of projectlists 

    return (
        // getting each detail of every project 
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} />
            <p>
                <b>Skills: </b>{project.skills}
            </p>
            <i className="fa-brands fa-github"></i>
        </div>
    );
}

export default ProjectDisplay;