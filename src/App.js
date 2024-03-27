import React from 'react';
import styles from './App.styles.js';
import { HorizontalCards, ContactMeCard, InterviewFAQsCard, LinkCard } from './components';

function App() {
  const linkedInLogo = require('./images/linkedin_logo.png');
  const githubLogo = require('./images/github_logo.png')
  const emailLogo = require('./images/email-logo.jpg')
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

  const interviewFAQs = [
    {
      question: '1. Tell me about yourself and your background in software/web development',
      answer: '- Answer 1'
    },
    {
      question: '2. What motivated you to pursue a career in softare/web development?',
      answer: '- Answer 2'
    },
    {
      question: '3. Describe a time when you had to work under pressure to meet a tight deadline. How did you handle it?',
      answer: '- Answer 3'
    },
    {
      question: '4. How do you handle constructive criticism or feedback on your code?',
      answer: '- Answer 4'
    },
    {
      question: '5. Describe a time when you faced a challenge and what you did to overcome it.',
      answer: '- Answer 5'
    },
    {
      question: '6. Can you discuss a situation where you had to learn a new technology or programming language quickly? How did you approach it?',
      answer: '- Answer 6'
    },
    {
      question: '7. Describe a time when you had a disagreement with a team member during a project. How did you handle it?',
      answer: '- Answer 7'
    },
    {
      question: '8. How do you prioritize tasks and manage your time effectively when working on multiple projects or deadlines?',
      answer: '- Answer 8'
    },
    {
      question: '9. How do you approach documentation in your projects?',
      answer: '- Answer 9'
    },
    {
      question: '10. What do you enjoy most about software/web development, and what do you find most challenging?',
      answer: '- Answer 10'
    },
  ]

  return (
    <div style={styles.websiteBackgroundContainer}>
      <div style={styles.multiCards}>
        {/* Profile Pic & Name Component */}
        <LinkCard
          icon={linkedInLogo}
          link="https://www.linkedin.com/in/jenna-cioffi/"

        />
        <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
          <LinkCard
            icon={emailLogo}
            link=""

          />
          <LinkCard
            icon={linkedInLogo}
            link="https://www.linkedin.com/in/jenna-cioffi/"

          />
          <LinkCard
            icon={githubLogo}
            link="https://github.com/jennacioffi"

          />
      
          {/* triple stacked white boxes with links */}
        </div>
      </div>
      <HorizontalCards
        title="Experience"
        bulletPoints={experienceBulletPoints}
        color="azureBlue"
      />
      <HorizontalCards
        title="Skills"
        bulletPoints={skillsBulletPoints}
        color="ceruleanBlue"
      />
      <HorizontalCards title="Education" bulletPoints={eduBulletPoints} color="deepBlue" />
      <div style={styles.multiCards}>
        <ContactMeCard/>
        <InterviewFAQsCard
          title="Interview FAQs"
          bulletPoints={interviewFAQs}
          color="midnightNavy"
        />
      </div>
    </div>
  );
}

export default App;
