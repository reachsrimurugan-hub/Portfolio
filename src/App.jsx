import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import InteractiveDivider from './components/InteractiveDivider';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundPattern from './components/BackgroundPattern';
import Cursor from './components/Cursor';
import './index.css';

function App() {
  return (
    <div className="app">
      <Cursor />
      <BackgroundPattern />
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <InteractiveDivider />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
