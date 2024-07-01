import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Footer from './components/Footer';
import Hero from './components/Hero';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience/>
      <Skills/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;