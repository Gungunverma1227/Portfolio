import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HighlightedProjects = ({ projects = [] }) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Explore some of my most significant projects that showcase my expertise in distributed systems, 
          full-stack development, and system programming.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-indigo-600 mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-slate-600 mb-4 text-sm">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(project.techStack || []).slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-indigo-600 hover:text-indigo-700"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          View Project
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                        <span className="text-sm text-slate-500">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-slate-500">
              No featured projects available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HighlightedProjects;
