import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.js';
import { FAQs } from './pages/FAQs/FAQs.js';
import { PageNotFound } from './pages/PageNotFound/PageNotFound.js'
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
        <Route path='/faqs' element={<FAQs />} />
        {/* Add routes for each section with an ID */}
        <Route path='/about-me' element={<HomePage />} />
        <Route path='/experience' element={<HomePage />} />
        <Route path='/skills' element={<HomePage />} />
        <Route path='/projects' element={<HomePage />} />
        <Route path='/contact-me' element={<HomePage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
