import React from 'react';
import { useLocation } from 'react-router-dom';
import { Github, Mail, Linkedin, Menu, X } from 'lucide-react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Add this import
import { Typewriter } from 'react-simple-typewriter';
import '../App.css';

export function ResponsiveHeader() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#031224] text-white">
      {location.pathname === '/' && (
        <>
          {/* Mobile Header */}
          <header className="relative min-h-screen w-full px-4 md:px-8 lg:px-16 md:hidden">
            <nav className="fixed top-0 left-0 w-full bg-[#031224]/95 backdrop-blur-sm z-50 border-b border-[#00aaff]/20">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white hover:text-[#00aaff] transition-colors"
                  >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>

                <div className={`transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0 overflow-hidden'}`}>
                  <div className="py-2 space-y-1">
                    {['Home', 'About', 'Projects', 'Contact', 'Resume'].map((item) => (
                      <a
                        key={item}
                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                        className={`block px-3 py-2 text-base hover:bg-[#ff8c00]/10 hover:text-[#ff8c00] rounded-md transition-colors
                          ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'text-[#00aaff]' : 'text-white'}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile Content */}
            <div className="flex flex-col justify-center min-h-screen max-w-4xl mx-auto">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold">Gungun verma</h1>
                <h2 className="text-2xl font-medium">
                  I am a{' '}
                  <span className="text-[#ff8c00]">
                    <Typewriter
                      words={['Web Developer', 'Software Engineer', 'Tech Enthusiast', 'Innovative Problem Solver', 'Continuous Learner']}
                      loop={true}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>
                <h3 className="text-xl text-[#00aaff] font-normal">
                  "Code is like humor. When you have to explain it, it's bad." - Cory House
                </h3>
                <div className="pt-8">
                  <ul className="flex space-x-4">
                    <li>
                      <a
                        href="https://github.com/Gungunverma1227"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-[#00aaff] rounded-full hover:bg-[#ff8c00] transition-all hover:scale-110"
                      >
                        <FaGithub size={20} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:shreyasmehta05@gmail.com"
                        className="inline-flex items-center justify-center w-10 h-10 bg-[#00aaff] rounded-full hover:bg-[#ff8c00] transition-all hover:scale-110"
                      >
                        <FaEnvelope size={20} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/shreyas-mehta-7018552b2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-[#00aaff] rounded-full hover:bg-[#ff8c00] transition-all hover:scale-110"
                      >
                        <FaLinkedin size={20} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>

          {/* Desktop Header */}
          <header className="hidden md:block min-h-screen">
            <header className="header">
                <div className="header-content">
                    <div className="close-gap">
                    <h1 className="my-name">Gungun verma</h1>
                    <h2 className="intro-line">
                        I am a{' '}
                        <span className="typewriter-text">
                        <Typewriter
                            words={['Web Developer', 'Software Engineer', 'Tech Enthusiast', 'Innovative Problem Solver', 'Continuous Learner']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        </span>
                    </h2>
                    <h3 className="quote">"Code is like humor. When you have to explain it, it’s bad." - Cory House</h3>

                    {/* Navbar Section */}
                    <nav className="navbar">
                        <div className="links">
                        <a href="/" className={location.pathname === "/" ? "active" : ""}>Home</a>
                        <a href="/about" className={location.pathname === "/about" ? "active" : ""}>About</a>
                        <a href="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</a>
                        <a href="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</a>
                        <a href="/resume" className={location.pathname === "/resume" ? "active" : ""}>Resume</a>
                        </div>
                    </nav>
                    </div>

                    {/* Contact Links */}
                    <div className="contact">
                    <ul className="contact-links">
                        <li>
                        <a href="https://github.com/Gungunverma1227" target="_blank" rel="noopener noreferrer" className="contact-btn">
                            <FaGithub size={30} />
                        </a>
                        </li>
                        <li>
                        <a href="mailto:gungunverma9310@gmail.com" className="contact-btn">
                            <FaEnvelope size={30} />
                        </a>
                        </li>
                        <li>
                        <a href="https://www.linkedin.com/in/gungun-verma-5a0b84299/" target="_blank" rel="noopener noreferrer" className="contact-btn">
                            <FaLinkedin size={30} />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </header>

          </header>
        </>
      )}
    </div>
  );
}
