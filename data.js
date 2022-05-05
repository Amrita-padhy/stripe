// import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <i className="bi bi-credit-card"></i> , url: '/products' },
      { label: 'terminal', icon: <i className="bi bi-credit-card"></i> , url: '/products' },
      { label: 'connect', icon: <i className="bi bi-credit-card"></i> , url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <i className="bi bi-book"></i>, url: '/products' },
      { label: 'libraries', icon: <i className="bi bi-book"></i>, url: '/products' },
      { label: 'help', icon: <i className="bi bi-book"></i>, url: '/products' },
      { label: 'billing', icon: <i className="bi bi-book"></i>, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <i className="bi bi-briefcase-fill"></i>, url: '/products' },
      { label: 'customers', icon: <i className="bi bi-briefcase-fill"></i>, url: '/products' },
    ],
  },
];

export default sublinks;