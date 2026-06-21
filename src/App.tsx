import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import { Toaster } from 'react-hot-toast';
import Footer from './components/footer';
import { Analytics } from "@vercel/analytics/react"
import { GlobalBackground } from './components/Backgrounds';
import TerminalLoader from './components/TerminalLoader';

function App() {
  return (
    <>
    <div className="bg-gray-900 text-white min-h-screen relative overflow-x-hidden">
      <GlobalBackground />
      <Toaster position="top-center" />
      <Analytics/>
      
      <TerminalLoader>
        <Navigation />
        <Hero />
        <Experience/>
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer/>
      </TerminalLoader>
    </div>
    </>
  );
}

export default App;