import { FaHouseUser, FaRegUserCircle, FaHandHoldingUsd } from 'react-icons/fa';

export const navLinks = [
  {
    id: 1,
    url: '/',
    text: 'Home',
    icon: <FaHouseUser />,
  },
  {
    id: 2,
    url: '/roles',
    text: 'Roles',
    icon: <FaHandHoldingUsd />,
  },
  {
    id: 3,
    url: '/users',
    text: 'Users',
    icon: <FaRegUserCircle />,
  },
];

export const userDataHeader = [
  'id',
  'name',
  'mobile',
  'email-id',
  'role',
  'status',
  'action',
];

export const userData = [
  {
    id: 1,
    name: 'Ramesh',
    mobile: '8756453402',
    email: 'ramesh@gmail.com',
    role: 'admin',
    status: 'active',
  },
  {
    id: 2,
    name: 'Ramesh',
    mobile: '8756453402',
    email: 'ramesh@gmail.com',
    role: 'admin',
    status: 'active',
  },
  {
    id: 3,
    name: 'Ramesh',
    mobile: '8756453402',
    email: 'ramesh@gmail.com',
    role: 'admin',
    status: 'active',
  },
  {
    id: 4,
    name: 'Ramesh',
    mobile: '8756453402',
    email: 'ramesh@gmail.com',
    role: 'admin',
    status: 'active',
  },
  {
    id: 5,
    name: 'Ramesh',
    mobile: '8756453402',
    email: 'ramesh@gmail.com',
    role: 'admin',
    status: 'active',
  },
  {
    id: 6,
    name: 'Ramesh',
    mobile: '8756453402',
    email: 'ramesh@gmail.com',
    role: 'admin',
    status: 'active',
  },
];

export const roleDataHeader = ['id', 'role name', 'status', 'action'];

export const roleData = [
  {
    id: 1,
    role: 'admin',
    status: 'active',
  },
  {
    id: 2,
    role: 'admin',
    status: 'active',
  },
  {
    id: 3,
    role: 'admin',
    status: 'active',
  },
];
