import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App
