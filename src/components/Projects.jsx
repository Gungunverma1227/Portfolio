import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronRight } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import '../styles/Projects.css';
import HighlightedProjects from './HighlightedProjects';


const projects1 = [
  {
    title: "React_crud_platform",
    subtitle: "Storage Management System",
    github: "https://github.com/Gungunverma1227/react-crud-project",
    techStack: ["ReactJS", "Javascript", "CSS", "HTML","Git"],
    description: "Built a dynamic and responsive CRUD (Create, Read, Update, Delete) web application using React that delivers a smooth and interactive user experience. The project allows users to efficiently manage data through real-time updates, intuitive forms, and seamless navigation.",
    course: "Full stack",
    year: 2026,
  },
  {
    title: "Url-shortener",
    subtitle: "Advanced Platform for providomg shorten links",
    github: "https://github.com/Gungunverma1227/URL-shortener",
    techStack: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Git", "Github" , "OAuth", "EJS",  ],
    description: "Built a full-stack photo and video editing platform with image upload, video customization, secure user authentication, and a real-time video preview. Deployed the platform online using cloud services.",
    course: "MERN Stack",
    year: 2026,
  },
  {
    title: "Django CRM",
    subtitle: "Customer Relationship Management",
    github: "https://github.com/Gungunverma1227/django-crm",
    techStack: ["HTML", "PYTHON", "SQL", "SQlite", "Django"],
    description: "Engineered a a smart and efficient CRM system using Django to manage customer records, streamline workflows, and improve business operations. Featuring secure authentication and a responsive dashboard, the project demonstrates strong backend development and database management skills.",
    course: "Data analysis using Python",
    year: 2025,
  },
  {
    title: "Dashboard using ShadCN",
    subtitle: "Managing data in dashboard using CRUD operations",
    github: "https://github.com/Gungunverma1227/react-crud-shadcn-dashboard",
    techStack: ["Javascript", "React", "ShadCN / UI", "Vite", "CSS", "HTML", "taiwind CSS", "Typescript","Next.js" ],
    description: "Reengineered the React crud project for ShadCN operations using Vite and React.",
    course: "Frontend Development",
    year: 2024,
  }
];


const ProjectsIllustration = () => (
  <svg className="projects-illustration" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grid-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="#f8fafc" />
    <g className="grid-lines">
      {[...Array(20)].map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 15}
          x2="400"
          y2={i * 15}
          stroke="#e2e8f0"
          strokeWidth="0.5"
        />
      ))}
      {[...Array(27)].map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 15}
          y1="0"
          x2={i * 15}
          y2="300"
          stroke="#e2e8f0"
          strokeWidth="0.5"
        />
      ))}
    </g>
    <g className="floating-cards">
      <rect x="50" y="50" width="80" height="100" rx="8" fill="white" stroke="#e2e8f0" />
      <rect x="270" y="150" width="80" height="100" rx="8" fill="white" stroke="#e2e8f0" />
      <rect x="160" y="100" width="80" height="100" rx="8" fill="white" stroke="#e2e8f0" />
    </g>
    <circle cx="200" cy="150" r="40" fill="url(#grid-gradient)" opacity="0.1" />
  </svg>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('updatedAt');
  const navbarHeight = 140;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Gungunverma1227/repos?types=public&sort=updated');
        if (!response.ok) throw new Error(`Failed to fetch projects: ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error('Received invalid data format');
        const formattedProjects = data.map(repo => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || 'No description provided.',
          link: repo.html_url,
          stars: repo.stargazers_count,
          language: repo.language,
          updatedAt: new Date(repo.updated_at).toLocaleDateString(),
          technologies: repo.language ? [repo.language] : ['Unknown'],
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
        }));
        setProjects(formattedProjects);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects
    .filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'stars') {
        return b.stars - a.stars;
      } else if (sortOption === 'title') {
        return a.title.localeCompare(b.title);
      } else {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      }
    });
  
  const LoadingAnimation = () => (
    <svg className="loading-spinner" viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );

  if (loading) {
    return (
      <div className="loading-container" style={{ paddingTop: `${navbarHeight}px` , minHeight:'100vh'}}>
        <LoadingAnimation />
        <div className="loading-text">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container" style={{ paddingTop: `${navbarHeight}px` , minHeight:'100vh'}}>
        <div className="error-box">
          <svg className="error-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="16" r="1" fill="currentColor" />
          </svg>
          <p className="error-text">Error: {error}</p>
          <button onClick={() => window.location.reload()} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      <style jsx>{`
        .projects-container {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          min-height: 100vh;
          padding: 2rem;
          padding-top: ${navbarHeight}px;
        }

        .projects-illustration {
          width: 100%;
          max-width: 600px;
          margin: 0 auto 2rem;
          display: block;
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .projects-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .heading {
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .search-sort-container {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          position: sticky;
          top: ${navbarHeight}px;
          z-index: 10;
          background: rgba(248, 250, 252, 0.9);
          padding: 1rem;
          backdrop-filter: blur(8px);
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .search-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .search-input:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .project-image {
          width: 80%;
          height: 10px;
          margin: 0 auto;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
      `}</style>

      <div className="projects-wrapper">
        <ProjectsIllustration />
        
        <h1 className="heading">
          <Typewriter
            words={['Showcase of My Work', 'Featured Projects', 'Portfolio']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <HighlightedProjects projects={projects1}/>
        <h2 className="section-title">All Projects</h2>
        <div className="search-sort-container">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <Select
            value={sortOption}
            onChange={(value) => setSortOption(value)}
            className="sort-select"
            style={{ width: 200 }}
          >
            <Select.Option value="updatedAt">Sort by Updated Date</Select.Option>
            <Select.Option value="title">Sort by Name</Select.Option>
            <Select.Option value="stars">Sort by Stars</Select.Option>
          </Select>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
              <div className="project-header">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-updated">Updated: {project.updatedAt}</p>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-footer">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-github-btn"
                >
                  View on GitHub
                  <svg
                    className="github-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                {project.language && (
                  <span className="project-language">
                    {project.language}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
