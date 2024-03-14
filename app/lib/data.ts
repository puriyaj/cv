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
    title: 'Sakht Sanat Kaveh Consulting Engineers Company Computer',
    location: 'Iran, Tehran',
    description: '○ Assembling Pcs and support Linux systems for servers and normal users building simple websites with css, html, jQuery with friendly user interface Learning C++ to Kids and adults and building simple games.',
    icon: React.createElement(CgWorkAlt),
    date: '10/2017–06/2019',
  },
  {
    title: 'Bachelor of science',
    location: 'Tehran,Iran',
    description: 'Computer Science and Engineering, Azad University',
    icon: React.createElement(LuGraduationCap),
    date: '2020-7',
  },

  {
    title: 'TuV INTERNATIONALWebDeveloper',
    location: 'Iran, Tehran (Remote)',
    description: '○ Designed and developed E-Commers Web Pages for Companies with one year support. Support services for websites, specializing in thorough debugging to enhance their performance. Building Databases with sql and nosql (with expertise in SQL for structured data and NoSQL for flexible and scalable data storage).Development of APIs for large-scale projects in Json format.',
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
] as const;
