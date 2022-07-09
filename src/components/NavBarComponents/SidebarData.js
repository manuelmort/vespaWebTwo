import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome class=" ml-2 inline-block float-left bg-transparent text-white" />,
    cName: 'nav-text'
  },
  {
    title: 'Apprenticeship',
    path: '/apprenticeship101',
    icon: <IoIcons.IoIosPaper class=" ml-2 inline-block bg-transparent float-left text-white"/>,
    cName: 'nav-text'
  },
  {
    title: 'Tutorial',
    path: '/tutorial',
    icon: <IoIcons.IoMdHelpCircle class=" ml-2 inline-block  bg-transparent float-left text-white" />,
    cName: 'nav-text'
  }
];