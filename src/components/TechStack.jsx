import React from 'react';
import { Code, Laptop, Git, FileText, Paintbrush } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      items: ["C", "C++", "Python", "JavaScript", "HTML", "CSS", "SQL"],
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500"
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Frameworks & Tools",
      items: ["React", "Jupyter"],
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500"
    },
    {
      icon: <Git className="w-6 h-6" />,
      title: "Version Control & Collaboration",
      items: ["Git", "GitHub"],
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document & Report Writing",
      items: ["LaTeX", "Overleaf"],
      gradientFrom: "from-orange-500",
      gradientTo: "to-yellow-500"
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Design & Presentation Tools",
      items: ["Canva"],
      gradientFrom: "from-red-500",
      gradientTo: "to-pink-500"
    }
  ];

  return (
    <div className="w-full space-y-8 p-6">
      {categories.map((category, categoryIndex) => (
        <div key={category.title} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradientFrom} ${category.gradientTo}`}>
              {React.cloneElement(category.icon, { className: "w-6 h-6 text-white" })}
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {category.items.map((item, itemIndex) => (
              <div
                key={item}
                className={`
                  relative group overflow-hidden
                  bg-white rounded-xl shadow-md
                  transform transition-all duration-300
                  hover:scale-105 hover:shadow-xl
                  cursor-pointer
                `}
              >
                {/* Background gradient that shows on hover */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-r ${category.gradientFrom} ${category.gradientTo}
                  transition-opacity duration-300
                `} />
                
                {/* Content */}
                <div className="relative p-4">
                  <div className="flex items-center justify-between">
                    <span className={`
                      font-semibold text-lg
                      group-hover:text-white
                      transition-colors duration-300
                    `}>
                      {item}
                    </span>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className={`
                  absolute bottom-0 right-0
                  w-8 h-8 rounded-tl-xl
                  bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo}
                  opacity-20 group-hover:opacity-0
                  transition-opacity duration-300
                `} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;