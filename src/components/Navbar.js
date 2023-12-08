import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../styles/Navbar.css';

 
function Navbar() {  //a navbar functional component 
    const [expandNavbar, setExpandNavbar] = useState(false); //a state hook for navbar 
    const location = useLocation(); //a location hook for navbar 

    useEffect(() => { //a hook that manipulates the dom when it's responsive for a mobile phone size based on its location 
        setExpandNavbar(false);
    }, [location]);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}> 
    {/* making navbar open or close depending on its size  */}
        <div className='toggleButton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>  
            {/* toggle between close & open for a navbar  */}
            <i className="fa-solid fa-bars"></i>
            </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  );
}

export default Navbar;