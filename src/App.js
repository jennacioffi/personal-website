import React from 'react';
import styles from './App.styles.js';
import { HorizontalCards, ContactMeCard, InterviewFAQsCard, LinkCard, ProfileInfo, LookingForCard } from './components';
import { colors } from './styles/colors.js'

import linkedInLogo from './images/linkedin_logo.png'
import githubLogo from './images/github_logo.png'
import emailLogo from './images/email-logo.jpg'


function App() {
  const whatImLookingForBulletPoints = [
    {
      paragraph: 'I am actively seeking an in-office role where I can immerse myself in the collaborative environment, focusing on web development projects. I am eager to contribute my skills and passion, I invite you to reach out via email through the Contact Me section below to explore potential opportunities'
    }
  ]

  const experienceBulletPoints = [
    {
      title: '- Atomic Jolt, Logan UT',
      subtitle: 'Software Developer',
      date: 'August 2022 - Jan 2024',
      info: {
        briefSummary: 'Contributed to the development and maintenance of mobile applications for iOS and Android platforms as a Software/App Developer. Engaged in all phases of the software development lifecycle, encompassing coding, testing, and debugging. Proficient in comprehensive testing procedures, including the creation of testing spreadsheets and contributing to Cypress tests. Emphasized meticulous documentation and project organization.',
        briefSummaryBP1: '- Initiated the creation of a comprehensive GitHub Wiki documentation, streamlining the onboarding process for new developers and providing a centralized resource for all team members to reference when working on projects under my ownership. This initiative significantly reduced the time required for new developers to acclimate and improved code consistency across projects',
        briefSummaryBP2: '- Assumed a leadership role in the development and management of the Know Your Lemons Breast Cancer Awareness app, serving as the primary point of contact for the client. Directed the creation and deployment of app builds to various app stores, ensuring timely releases. Facilitated bug-fixing efforts and spearheaded client meetings, contributing to the app\'s success and client satisfaction',
        briefSummaryBP3: '- Collaborated with MIT on the development of the Learner Credential Wallet app, pioneering solutions in the emerging field of digital credential management. Played a pivotal role in conceptualizing and implementing the app\'s functionalities, transforming the way users manage and showcase their educational achievements. This initiative represented a significant step forward in the digitization of academic credentials, positioning MIT at the forefront of innovation in education technology.',
        link: 'https://www.atomicjolt.com/atomic-jolt-apps'
      }
    },
    {
      title: '- USU Teaching Assistant',
      subtitle: 'CS 1440 - Methods in Computer Science',
      date: 'August 2022 - Jan 2024',
      info: {
        briefSummary: 'Served as a Teaching Assistant for a course focused on teaching students command line usage, git, and problem-solving techniques. Emphasized the importance of documentation throughout the software development process, from initial planning to post-testing analysis, fostering a culture of thoroughness and clarity in project execution.',
        briefSummaryBP1: '- Conducted regular office hours to provide additional support and assistance to students outside of class, fostering a conducive environment for learning and addressing individual queries and concerns effectively.',
        briefSummaryBP2: '- Delivered detailed feedback on student assignments, offering valuable insights to enhance their understanding and proficiency in the course material.',
        briefSummaryBP3: '- Collaborated with colleagues to develop and implement grading scripts, optimizing the grading process and enabling TAs and professors to allocate more time towards student assistance and mentoring.',
      }
    },
  ];

  const skillsBulletPoints = [
    {
      title: '- Programming Languages:',
      subtitle: 'Python, C++, JavaScript, Type Script, Java',
      date: '',
    },
    {
      title: '- Design Tools:',
      subtitle: 'Figma',
      date: '',
    },
    {
      title: '- Frameworks/Libraries:',
      subtitle: 'React Native, Node.js',
      date: '',
    },
    {
      title: '- Database:',
      subtitle: 'Familiar with SQL syntax',
      date: '',
    },
    {
      title: '- Version Control/Command Line:',
      subtitle: 'Proficient in Git, adept at command line usage',
      date: '',
    },
    {
      title: '- Testing:',
      subtitle: 'Cypress, manual testing, spreadsheet management',
      date: '',
    },
    {
      title: '- Project Management:',
      subtitle: 'Experience with Pivotal Tracker and GitHub project boards',
      date: '',
    },
    {
      title: '- Mobile App Development:',
      subtitle: 'iOS and Android (build creation, releases to app stores), App Development',
      date: '',
    },
    {
      title: '- Soft Skills:',
      subtitle:
      'Open-minded, adaptable, values transparent communication. Emphasizes documentation, organization, and up-to-date information. Confidence and ability to lead, Clear Communication, Initiative, Leadership, Teamwork',
      date: '',
    },
  ];


  const eduBulletPoints = [
    {
      title: '- Utah State University',
      subtitle: 'Bachelors in Computer Science',
      date: 'August 2017 - May 2023',
    },
  ];

  const volunteerExpBulletPoints = [
    {
      title: '- Humane Society of Northern Nevada',
      subtitle: 'Animal Shelter',
      date: 'August 2013 - May 2017',
      info: {
        briefSummary: 'Fulfilled volunteer hours at the Nevada Humane Society, providing specialized care and support to sick newborn kittens while collaborating with adoption counselors to facilitate successful adoptions.',
        briefSummaryBP1: '- Delivered specialized care to sick newborn kittens, administering medications and adhering to feeding schedules to promote their health and development.',
        briefSummaryBP2: '- Collaborated with veterinary professionals to ensure the well-being of kittens, implementing feeding schedules and administering medications as directed.',
        briefSummaryBP3: '- Worked closely with adoption counselors to facilitate successful adoptions, contributing to increased adoption rates and the placement of kittens into loving homes.',
        briefSummaryBP4: '- Demonstrated compassion and dedication in providing a nurturing environment for vulnerable animals, fostering positive community impact.'
      }
    },
    {
      title: '- Various Homeless Aid Areas',
      subtitle: 'Homeless Shelters & Soup Kitchens',
      date: 'August 2013 - May 2017',
      info: {
        briefSummary: 'Volunteered at local homeless shelters, assisting in donation drives aimed at collecting essentials for individuals and families in need, demonstrating dedication and compassion.',
        briefSummaryBP1: '- Provided hands-on assistance during donation drives, aiding in the setup, organization, and execution of events to ensure efficient operations and a positive experience for donors and recipients.',
        briefSummaryBP2: '- Demonstrated dedication and compassion by actively participating in donation initiatives and contributing personal donations to support individuals and families experiencing homelessness.',
        briefSummaryBP3: '- Engaged with donors and community members to promote awareness and participation in donation drives, fostering a spirit of generosity and community support for those in need.'
      }
    }
  ]

  const pastProjectsBulletPoints = [
    {
      title: '- Know Your Lemons Breast Cancer App',
      subtitle: 'https://www.knowyourlemons.org/app',
      date: 'Related To: Atomic Jolt'
    },
    {
      title: '- MIT Learner Credential Wallet',
      subtitle: 'https://lcw.app/',
      date: 'Related To: Atomic Jolt'
    },
    {
      title: '- This Personal Website',
      subtitle: 'https://github.com/jennacioffi/personal-website',
      date: 'Related To: Personal Projects'
    }
  ]

  const interviewFAQs = [
    {
      question: '1. Tell me about yourself and your background in software/web development',
      answer: '- About Myself:\n My hobbies include outdoorsy sports (mountain biking, snowboarding), engaging in art, reading, and spending quality time with friends and family.\n\n - My Background in CS:\n From a young age, I immersed myself in technology, starting with Apple products and gaming consoles like Nintendo 64 and Xbox. Despite being the odd one out in middle and high school for using a tablet instead of textbooks, my interest in technology persisted. In college, an academic advisor\'s suggestion led me to explore computer science, where I found inspiring professors who fueled my curiosity in coding. Most of my time was spent exploring the command line. Post-college, I transitioned into the field of app and web development, where I\'ve discovered immense enjoyment in building projects of this nature.'
    },
    {
      question: '2. What motivated you to pursue a career in software/web development?',
      answer: '- My motivation to pursue a career in software/web development stems from the realization that coding opens doors to endless possibilities. In today\'s digital age, where most users interact with the internet through various platforms like smartphones, tablets, and computers, web development offers the opportunity to reach the widest audience. Social media platforms exemplify this reach, enabling users to connect and share experiences globally. I am driven by the potential to make a positive impact through technology. My deep interest in psychology fuels my desire to leverage app and web development to create solutions that benefit individuals on a global scale.'


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
    <div style={styles.main}>
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
      <LookingForCard 
        title= "My Ideal Job"
        bulletPoints={whatImLookingForBulletPoints}
        color={colors.lookingForBGColor}
      />
      <HorizontalCards
        title="Experience"
        bulletPoints={experienceBulletPoints}
        color={colors.experienceBGColor}
      />
      <HorizontalCards
        title="Skills"
        bulletPoints={skillsBulletPoints}
        color={colors.skillsBGColor}
      />
      <HorizontalCards
        title="Volunteer Experience"
        bulletPoints={volunteerExpBulletPoints}
        color={colors.volunteerExpBGColor}
      />
      <HorizontalCards 
        title="Education" 
        bulletPoints={eduBulletPoints} 
        color={colors.educationBGColor} 
      />
      <HorizontalCards 
        title="Projects" 
        bulletPoints={pastProjectsBulletPoints} 
        color={colors.pastWorkProjectsBGColor} 
      />
      <div style={styles.multiCards}>
        <ContactMeCard
          color={colors.contactMeBGColor}  
        />
        <InterviewFAQsCard
          title="Interview FAQs"
          bulletPoints={interviewFAQs}
          color={colors.interviewFQSBGColor}
        />
      </div>
    </div>
  );
}

export default App;
