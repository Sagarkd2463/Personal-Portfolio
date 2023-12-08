import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from '../src/pages/Home';
import Experience from '../src/pages/Experience';
import Projects from '../src/pages/Projects';
import Navbar from '../src/components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from '../src/pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/projects/:id' element={<ProjectDisplay />}/>
          <Route path='/experience' element={<Experience />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
