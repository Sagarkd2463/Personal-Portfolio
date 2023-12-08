import React from 'react';
import '../styles/Home.css';

function Home() { //a functional component for home section 
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Sagar</h2>
        <div className='prompt'>
          <p>
            A software engineer with a passion for learning and creating.
          </p>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-solid fa-envelope"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, Flutter, NPM,
              BootStrap, MaterialUI, TailwindCSS, StyledComponents.
            </span>
          </li>

          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer, Springboot
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL.
            </span>
          </li>

          <li className='item'>
            <h2>Languages</h2>
            <span>
              JavaScript, Java, Python, C, C++, TypeScript, Go.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;