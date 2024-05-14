import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.js';
import { Projects } from './pages/Projects/Projects.js';
import { FAQs } from './pages/FAQs/FAQs.js';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div 
      style={{
        display: 'flex',
        minWidth: 'max-content', 
        flexDirection: 'column',
      }}>
      <NavBar/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/faqs' element={<FAQs />} />
      </Routes>
    </div>
  );
}

export default App;
