import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const PublicationIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13c-1.168-.776-2.754-1.253-4.5-1.253-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const CourseIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
  </svg>
);

const Resume = () => {
  useEffect(() => {
    document.body.classList.add('fade-in');
  }, []);

  const technicalSkills = {
    "Programming Languages": ["C/C++", "Python", "JavaScript", "HTML", "CSS"],
    "ML & Data Science": ["Machine Learning", "Data Analysis", "Scikit-learn", "Data Preprocessing", "Classification", "Clustering", "Google Colab", "Kaggle", "Jupyter Notebook"],
    "Libraries & Frameworks": ["Numpy", "Pandas", "Matplotlib", "React", "Node.js", "Express.js", "Django", "Flask", "Tailwind CSS", "ShadCN UI"],
    "Databases": ["MySQL", "MongoDB", "AWS"],
    "Tools & Environments": ["Git", "GitHub", "VSCode", "Postman", "Chrome DevTools", "LaTeX", "Linux", "Overleaf"],
  };

  const publications = [
    {
      title: "AI Integration in Travel Itinerary Maker",
      status: "(Under Review, IEEE, 2025)",
      description: "Led research on integrating AI techniques with Travel Itinerary makers, developing novel models for making planning easy.",
      role: "Primary author responsible for AI methodology integration.",
      note: "Research conducted under COA Course, even 2024"
    }
  ];

  const courses = {
    "Computer Science & Engineering": [
      "Computer Systems Organization and Architecture",
      "Digital Systems and Microcontrollers",
      "Data Structures and Algorithms",
      "Designing Algorithm and Analysis" ,
      "Operating Systems and computer Networks",
      "Soft computing",
      "database management and systems",
      "Intelligent systems "
    ],
    "Mathematics & Theory": [
      "Real Analysis",
      "Linear Algebra",
      "Discrete Structures",
      "Probability and Statistics",
      "Automata Theory",
    ],
    "Specialized Areas": [
      "Machine Learning",
      "Soft Computing",
      "database management and systems (DBMS)",
      "Computer Graphics"
    ]
  };
  const navbarHeight = 140;
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="max-w-6xl mx-auto"
        style={{ paddingTop: `${navbarHeight}px` }}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Gungun verma</h1>
          <p className="text-gray-600 text-lg">Software Developer | Problem Solver | Tech Enthusiast</p>
          <div className="flex justify-center gap-4 mt-4">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => window.location.href = "mailto:gungunverma9310@gmail.com"} // Redirect to email
            >
              <Mail className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer" />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => window.open("https://github.com/Gungunverma1227", "_blank")} // Redirect to GitHub
            >
              <Github className="text-gray-600 hover:text-gray-900 transition-colors duration-300 cursor-pointer" />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => window.open("https://www.linkedin.com/in/gungun-verma-5a0b84299/", "_blank")} // Redirect to LinkedIn
            >
              <Linkedin className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer" />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => window.open("https://www.google.co.in/maps/place/ECHELON+INSTITUTE+OF+TECHNOLOGY,+Haryana+121101/@28.3916823,77.4386882,18z/data=!3m1!4b1!4m6!3m5!1s0x390cc3962046ee35:0xe00991f29f07c1df!8m2!3d28.3914675!4d77.4404387!16s%2Fg%2F11lsngh92w?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D", "_blank")} // Redirect to Map/Location
            >
              <MapPin className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer" />
            </motion.div>
          </div>

        </motion.div>

        <div className="space-y-8">
          {/* Education Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-blue-400 w-6 h-6" />
                <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-400 pl-6 hover:border-blue-600 transition-all duration-300">
                  <h3 className="text-lg font-medium text-gray-800">B.Tech., CSE</h3>
                  <p className="text-gray-600">Echelon Institute of Technology, Haryana</p>
                  <p className="text-gray-500 text-sm">August 2023 - Present (CGPA: 8.006)</p>
                </div>
                <div className="border-l-2 border-blue-400 pl-6 hover:border-blue-600 transition-all duration-300">
                  <h3 className="text-lg font-medium text-gray-800">Senior Secondary</h3>
                  <p className="text-gray-600">Senior Shreeram model high School, Faridabad</p>
                  <p className="text-gray-500 text-sm">2021 - 2022 (88%)</p>
                </div>
                <div className="border-l-2 border-blue-400 pl-6 hover:border-blue-600 transition-all duration-300">
                  <h3 className="text-lg font-medium text-gray-800">Secondary</h3>
                  <p className="text-gray-600">Senior Shreeram model high School, Faridabad</p>
                  <p className="text-gray-500 text-sm">2019 - 2020 (85.6%)</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <SkillIcon />
                <h2 className="text-2xl font-semibold text-gray-800">Technical Skills</h2>
              </div>
              <div className="space-y-6">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category} className="border-l-2 border-blue-400 pl-6 hover:border-blue-600 transition-all duration-300">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-colors duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Publications Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-8 bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <PublicationIcon />
                <h2 className="text-2xl font-semibold text-gray-800">Publications</h2>
              </div>
              <div className="space-y-8">
                {publications.map((pub, index) => (
                  <div key={index} className="border-l-2 border-blue-400 pl-6 hover:border-blue-600 transition-all duration-300">
                    <h3 className="text-lg font-medium text-gray-800">{pub.title}</h3>
                    <p className="text-blue-600 italic text-sm mb-2">{pub.status}</p>
                    <p className="text-gray-600 mb-2">{pub.description}</p>
                    <p className="text-gray-700 font-medium mb-1">Role: {pub.role}</p>
                    <p className="text-gray-500 text-sm italic">{pub.note}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Courses Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-8 bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <CourseIcon />
                <h2 className="text-2xl font-semibold text-gray-800">Key Courses Taken</h2>
              </div>
              <div className="space-y-8">
                {Object.entries(courses).map(([category, courseList]) => (
                  <div key={category} className="border-l-2 border-blue-400 pl-6 hover:border-blue-600 transition-all duration-300">
                    <h3 className="text-lg font-medium text-gray-800 mb-3">{category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {courseList.map((course) => (
                        <div key={course} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                          • {course}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg inline-flex items-center gap-2 transition-all duration-300"
          onClick={() => {
          const resumeUrl = "file:///C:/Users/Gungun/OneDrive/Desktop/Gungun%20verma%20resume%20(2).pdf";  // Use an absolute path since it's in the public folder
          const a = document.createElement("a");
          a.href = resumeUrl;
          a.download = "file:///C:/Users/Gungun/OneDrive/Desktop/Gungun%20verma%20resume%20(2).pdf"; // Optional: You can specify the filename here
          a.target = "_blank"; // This ensures it opens in a new tab
          a.click();
        }}

        >
          <Download className="w-4 h-4" />
          Download Resume
        </button>



        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;
