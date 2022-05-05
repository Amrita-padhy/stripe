import React from 'react';
import './App.css';
import Navbar from './navBar';
import Sidebar from './sideBar';
import Hero from './hero';
import Submenu from './subMenu';
import sublink from './data'

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}

export default App;
