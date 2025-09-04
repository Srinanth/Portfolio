import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Education from './components/Education';
import About from './components/Journey';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import { Toaster } from 'react-hot-toast';
import Footer from './components/footer';


function App() {
  return (
    <>
    <div className="bg-gray-900 text-white">
      <Toaster position="top-center" />
      <Navigation />
      <Hero />
      <Education />
      <About />
      <Experience/>
      <Projects />
      <Skills />
      <Contact />
      <Footer/>
    </div>
    </>
  );
}

export default App;