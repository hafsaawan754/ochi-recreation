
import React from 'react';
import Navbar from './compnents/navbar';
import LandingPage from './compnents/LandingPage';
import Marquee from './compnents/Marquee';
import About from './compnents/About';
import Eyes from './compnents/Eyes';
import Feature from './compnents/Feature';
function App() {
  return (
    <div className='w-full min-h-screen  bg-zinc-900 text-white'>
     <Navbar/>
     <LandingPage/>
     <Marquee/>
     <About/>
     <Eyes/>
    <Feature/>


    </div>
  );
};

export default App;
