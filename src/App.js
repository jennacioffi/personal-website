import React from 'react';
import styles from './App.styles.js';
import { HorizontalCards, ContactMeCard, InterviewFAQsCard, LinkCard, ProfileInfo } from './components';

import linkedInLogo from './images/linkedin_logo.png'
import githubLogo from './images/github_logo.png'
import emailLogo from './images/email-logo.jpg'


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

  const volunteerExpBulletPoints = [
    {
      title: '- Humane Society of Northern Nevada',
      subtitle: 'Animal Shelter',
      date: 'August 2013 - May 2017',
    },
    {
      title: '- Various Homeless Aid Areas',
      subtitle: 'Homeless Shelters & Soup Kitchens',
      date: 'August 2013 - May 2017',
    }
  ]

  const interviewFAQs = [
    {
      question: '1. Tell me about yourself and your background in software/web development',
      answer: '- I possess a unique background in software and web development that sets me apart from the conventional developer archetype. While I thrive in the world of technology during work hours, I\'m characterized by an extroverted nature and a preference for outdoor activities away from screens outside of professional obligations.\n\nMy journey into software development began with a push from a college advisor, rather than an inherent passion or prior experience. Prior to my first computer science course, I hadn\'t ventured into programming. However, once introduced to the field, I pursued a diverse range of courses encompassing various facets of computer science, including command line operations, system architecture, and web development.\n\nWhile I am not inclined towards generating original ideas independently, I do occasionally find myself creatively engaged in problem-solving within tech-related projects. My exposure to different programming languages and concepts, including an app development course and a particularly intriguing experience with C++, has broadened my understanding and fueled my enthusiasm for the field.\n\nWhat I particularly value in any professional setting is constructive criticism and open communication, which I believe are integral to personal and collective growth.'
    },
    {
      question: '2. What motivated you to pursue a career in softare/web development?',
      answer: '- My passion for technology, coupled with a deep interest in psychology, has been a driving force behind my decision to pursue a career in software and web development. From a young age, I\'ve been captivated by the parallels between computers and life, finding immense utility in technology\'s ability to streamline tasks and enhance accessibility, such as using iPads and digital textbooks to ease academic burdens.\n\nWitnessing the tangible results of my work coming to life has consistently provided a gratifying sense of accomplishment. Looking ahead, I am eager to further my education in psychology and channel my technical skills into creating impactful applications and websites aimed at addressing pressing societal issues, particularly in the realm of mental health. My overarching goal is to leverage technology as a catalyst for positive change and personal empowerment, driving forward progress for individuals and society as a whole.'


    },
    {
      question: '3. Describe a time when you had to work under pressure to meet a tight deadline. How did you handle it?',
      answer: '- During my academic experience, I encountered several instances where I had to navigate tight deadlines, particularly with school assignments. Recognizing the importance of punctuality in the professional world, I made it a personal priority to stay ahead of my tasks and avoid the risk of falling behind.\n\nI remained proactive in managing my workload to prevent any last-minute rushes. In the academic setting, I maintained open communication with my professors.\n\nThis approach ensured that I fulfilled my commitments responsibly while maintaining a professional standard of work and communication.'
    },
    {
      question: '4. How do you handle constructive criticism or feedback on your code?',
      answer: '- I approach constructive criticism and feedback on my code with an open mind and a growth-oriented mindset. Recognizing that I\'m still evolving in this field, I genuinely value code reviews as opportunities for learning and improvement. I welcome kind and constructive criticism, as it provides invaluable insights that contribute to my professional development. Viewing every feedback session as a learning experience, I strive to implement suggested improvements and refine my coding practices continuously.'
    },
    {
      question: '5. Describe a time when you faced a challenge and what you did to overcome it.',
      answer: '- In navigating life\'s challenges, I adopt a methodical approach centered around pausing, analyzing, and adapting accordingly. When confronted with a challenge, I take a moment to pause and thoroughly analyze the situation. I identify the root cause, assess its potential impacts, and brainstorm potential solutions. This analysis involves questioning whether I possess the necessary skills to address the issue independently or if I require assistance.\n\nIf I determine that I may require assistance, I initially attempt to resolve the challenge on my own, allocating a reasonable timeframe to explore potential solutions. I prioritize efficiency and avoid unnecessary delays. Should I encounter difficulty in finding a resolution, I proactively seek assistance from colleagues or mentors.\n\nFor challenges that prove too complex or beyond my expertise, I acknowledge limitations and promptly seek alternative solutions. This may involve compiling a comprehensive overview of the challenge and engaging the expertise of individuals or resources better equipped to provide assistance, ensuring effective problem-solving and forward progress.'
    },
    {
      question: '6. Can you discuss a situation where you had to learn a new technology or programming language quickly? How did you approach it?',
      answer: '- Early in my career, I encountered a scenario where I had to swiftly acquire proficiency in iOS and Android app development for a project aimed at supporting a non-profit foundation\'s breast cancer awareness initiative. Despite lacking prior experience in app development, I was determined to meet the client\'s expectations and deliver impactful results.\n\nTo expedite my learning process, I leveraged online learning platforms such as Codecademy and YouTube, focusing on mastering the necessary programming languages. Additionally, I received guidance from the development lead, who provided clear direction on key areas to prioritize.\n\nThrough dedicated self-study and mentorship, I rapidly acquired the requisite skills, enabling me to contribute effectively to the project. Subsequently, my newfound expertise proved valuable when we secured a project with MIT, where I assisted the tech lead in optimizing the app deployment process for their digital wallet solution.\n\nThis experience underscored the effectiveness of proactive learning and collaboration in adapting to new technologies and fulfilling project requirements efficiently.'
    },
    {
      question: '7. Describe a time when you had a disagreement with a team member during a project. How did you handle it?',
      answer: '- Throughout my career, I\'ve encountered differing perspectives and occasional disagreements with team members. Embracing the diversity of backgrounds and experiences within a team, I prioritize fostering understanding and collaboration.\n\nIn one instance, I found myself at odds with a colleague regarding our approaches to problem-solving. Despite the discord, I maintained a composed demeanor and advocated for a brief period of reflection to de-escalate tensions. This allowed both parties to regroup and revisit the discussion with a calmer mindset.\n\nPreferring resolution over conflict, I actively seek to understand others\' viewpoints and remain receptive to alternative approaches, provided they align with the project\'s objectives. By fostering open communication and demonstrating flexibility, I\'ve successfully mitigated conflicts and fostered constructive collaboration among team members.'
    },
    {
      question: '8. How do you prioritize tasks and manage your time effectively when working on multiple projects or deadlines?',
      answer: '- I prioritize tasks by using task management tools to organize them from highest to lowest priority. While I\'m still exploring the best software for this purpose, I\'ve found success with tools like the Reminders app and calendar app on Apple products. Each morning, I create a strategic plan of action, ensuring that essential tasks are completed first while allowing flexibility for tasks that can be tackled later if time permits.'
    },
    {
      question: '9. How do you approach documentation in your projects?',
      answer: '- Documentation is integral to my project approach, underscored by professional experience. While teaching a freshman CS course at USU as a student, I learned firsthand the importance of documentation through practical application in coursework. Upon entering the professional realm after graduation, I encountered challenges with poorly documented projects, realizing the significant impact on team productivity and collaboration. Confronted with an undocumented app development project, I invested additional time to decipher its complexities and promptly authored comprehensive documentation, alleviating team setbacks and facilitating smoother collaboration. Subsequently, my colleagues consistently sought my documentation expertise, recognizing its value in navigating projects efficiently.'
    },
    {
      question: '10. What do you enjoy most about software/web development, and what do you find most challenging?',
      answer: '- The most challenging aspect of software/web development for me is grappling with poorly written documentation, which often lacks clarity and coherence. As a developer who prioritizes user-centric thinking, bridging the gap between everyday visualization and the technical intricacies of documentation can be daunting. To address this challenge, I focus on crafting clear and understandable documentation, seeking feedback to ensure its accessibility. Despite these hurdles, the most enjoyable aspect of software/web development lies in witnessing the transformation of ideas into tangible solutions. The satisfaction derived from seeing projects evolve from concept to reality, coupled with the continuous learning experience, remains immensely rewarding.'
    },
  ]

  return (
    <div style={styles.websiteBackgroundContainer}>
      <div style={styles.multiCards}>
        {/* Profile Pic & Name Component */}
        <div style={styles.leftCards}>
          <ProfileInfo
            name="Jenna"
          />
        </div>
        <div style={styles.rightCards}>
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
      <HorizontalCards
        title="Volunteer Experience"
        bulletPoints={volunteerExpBulletPoints}
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
