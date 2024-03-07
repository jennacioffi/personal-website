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

  const skillsBulletPoints = [
    {
      title: '- Programming Languages:',
      subtitle: 'Python, C++, JavaScript, Type Script',
      date: '',
    },
    {
      title: '- Design Tools:',
      subtitle: 'Figma',
      date: '',
    },
    {
      title: '- Frameworks/Libraries:',
      subtitle: 'React Native.',
      date: '',
    },
    {
      title: '- Database:',
      subtitle: 'Familiar with SQL syntax.',
      date: '',
    },
    {
      title: '- Version Control/Command Line:',
      subtitle: 'Proficient in Git, adept at command line usage.',
      date: '',
    },
    {
      title: '- Testing:',
      subtitle: 'Cypress, manual testing, spreadsheet management.',
      date: '',
    },
    {
      title: '- Project Management:',
      subtitle: 'Experience with Pivotal Tracker and GitHub project boards.',
      date: '',
    },
    {
      title: '- Mobile App Development:',
      subtitle: 'iOS and Android (build creation, releases to app stores).',
      date: '',
    },
    {
      title: '- Soft Skills:',
      subtitle:
        'Open-minded, adaptable, values transparent communication. Emphasizes documentation, organization, and up-to-date information. Confidence and ability to lead.',
      date: '',
    },
  ];

  const eduBulletPoints = [
    {
      title: '- Utah State University',
      subtitle: 'Bachlors in Computer Science',
      date: 'August 2017 - May 2023',
    },
  ];

  return (
    <div>
      <Card
        title="Experience"
        bulletPoints={experienceBulletPoints}
        color="azureBlue"
      />
      <Card
        title="Skills"
        bulletPoints={skillsBulletPoints}
        color="ceruleanBlue"
      />
      <Card title="Education" bulletPoints={eduBulletPoints} color="deepBlue" />
    </div>
  );
}

export default App;
