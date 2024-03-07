import React from 'react';
import './App.styles.js';
import { Card } from './components';

function App() {
  const experienceBulletPoints = [
    {
      title: '- Atomic Jolt, Logan UT',
      subtitle: 'Software Developer',
      date: 'August 2022 - Jan 2024',
    },
    {
      title: '- USU Teaching Assistant',
      subtitle: 'CS 1440 - Methods in Computer Science',
      date: 'August 2022 - Jan 2024',
    },
  ];

  return (
    <div>
      <Card
        title="Experience"
        bulletPoints={experienceBulletPoints}
        color="ceruleanBlue"
      />
      {/* Pass the color name as a prop */}
    </div>
  );
}

export default App;
