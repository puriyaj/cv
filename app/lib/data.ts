import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';


export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'CodeCrafters SAS',
    location: 'Iran, Tehran',
    description: '- Assisted senior developers in frontend development using HTML, CSS, and JavaScript.Contributed ideas in team meetings to improve project workflows.Enhanced coding skills by learning and using React.js. Collaborated with backend developers for seamless integration. Conducted manual testing and bug fixes for smooth user experiences.',
    icon: React.createElement(CgWorkAlt),
    date: '05/2020–06/2021',
  },
  {
    title: 'Bachelor of science',
    location: 'Tehran,Iran',
    description: 'Computer Science and Engineering, Azad University',
    icon: React.createElement(LuGraduationCap),
    date: '2020-7',
  },

  {
    title: 'EuroTech Solutions Ltd',
    location: 'Armenia - Yerevan',
    description: '- Led frontend development using React.js, ensuring efficient code. Worked closely with clients to create scalable user interfaces. Developed custom React components, optimizing performance. Integrated backend APIs for seamless communication. Implemented automated testing with Jest and React Testing Library. Deployed CI/CD pipelines with GitLab CI for rapid iterations.',
    icon: React.createElement(CgWorkAlt),
    date: '07/2019–07/2021',
  },
  {
    title: 'German language certification',
    location: 'Technical University Berlin',
    description: 'I have learned German language up to C1 level at the Technical University of Berlin. ',
    icon: React.createElement(LuGraduationCap),
    date: '12-2023',
  },
  {
    title: 'ByteWorks Technologies',
    location: 'Armenia - Yerevan',
    description: '- Developed responsive interfaces using HTML, CSS, and JavaScript frameworks, specializing in React.js. Worked closely with the design team for consistent design implementation across browsers and devices. Conducted automated testing with Jest.js for code reliability. Integrated RESTful APIs and GraphQL endpoints for efficient data management. Utilized Git for version control and participated in code reviews to maintain coding standards.',
    icon: React.createElement(CgWorkAlt),
    date: '07/2022–01/2024',
  },
  
] as const;
