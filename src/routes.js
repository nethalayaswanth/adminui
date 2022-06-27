import React from 'react';

import { Icon } from '@chakra-ui/react';

import { HiHome, HiUsers } from 'react-icons/hi';
import { RiTodoFill, RiTShirtFill } from 'react-icons/ri';


const routes = [
  {
    name: 'Home',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={HiHome} width="20px" height="20px" color="inherit" />,
  },

  {
    name: 'users',
    layout: '/admin',
    icon: <Icon as={HiUsers} width="20px" height="20px" color="inherit" />,
    path: '/data-tables',
  },
  {
    name: 'products',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={RiTShirtFill} width="20px" height="20px" color="inherit" />,
  },
  
];

export default routes;
