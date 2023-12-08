import React from 'react';
import {useNavigate} from 'react-router-dom';

function ProjectItem({image, name, id}) { //a functional component for iterating all different projects passing its name, image & id as props 
  const navigate = useNavigate(); //a hook that navigates each project 

  return (
    // a onclick listener that navigates each project in projects section through its id 
    <div className='projectItem' 
    onClick={() => {navigate("/projects/" + id)}}
    >
        <div style={{backgroundImage: `url(${image})`}} 
        // setting each background image for each project 
        className='bgImage'/>
        <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;