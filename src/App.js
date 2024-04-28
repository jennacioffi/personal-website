import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AboutMeAndFAQs } from './pages/AboutMeAndFAQs.js';
import { ContactMe } from './pages/ContactMe.js';
import { Experience } from './pages/Experience.js';
import { Projects } from './pages/Projects.js';
import { Skills } from './pages/Skills.js';

function App() {
  return (
    <div 
      style={{    overflow: 'auto', minWidth: '1200px',
      }}>
      <Routes>
        <Route index element={<AboutMeAndFAQs />} />
        <Route path='/about-me-and-faqs' element={<AboutMeAndFAQs />} />
        <Route path='/contact-me' element={<ContactMe />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
