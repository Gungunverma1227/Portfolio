import Navbar from './components/Navbars';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css'; 
import { Typewriter } from 'react-simple-typewriter'; 
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 
import {ResponsiveHeader} from './components/ResponsiveHeader';
function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

// Moved useLocation inside MainContent
function MainContent() {
  const location = useLocation(); // Correct placement inside the Router context

  return (
    <div className='mainbox'>
      {/* Header Section - Only render when on Home page */}
      {location.pathname === '/' && (
        <ResponsiveHeader />
      )}

    
      {location.pathname !== '/' &&   <Navbar />}
      {/* Main Content Section */}
      <div className="w-screen max-w-full p-0 m-0">
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>


      {/* Footer Section - Render only if not on Home  page */}
      {(location.pathname !== '/' && location.pathname !=='/contact' && location.pathname !=='/resume') && <Footer />}
    </div>
  );
}

export default App;
