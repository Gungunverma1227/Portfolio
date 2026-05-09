import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, MapPin, Award, Coffee, Code } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import ProfileCard from './ProfileCard';  // Make sure this path matches your file structure

const ProfileSection = () => {
  const [activeMetric, setActiveMetric] = useState(null);

  const funMetrics = [
    { 
      icon: <Code className="w-4 h-4" />,
      value: "10K+",
      label: "Lines of Code",
      color: "bg-purple-100 text-purple-600" 
    },
    { 
      icon: <Coffee className="w-4 h-4" />,
      value: "∞",
      label: "Cups of Coffee",
      color: "bg-amber-100 text-amber-600"
    },
    { 
      icon: <Clock className="w-4 h-4" />,
      value: "1000+",
      label: "Hours Coding",
      color: "bg-emerald-100 text-emerald-600"
    }
  ];

  return (
    <Card className="lg:col-span-1">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center">
          <ProfileCard />
          <h1 className="text-2xl font-bold text-slate-900 mt-8 mb-2">Gungun verma</h1>
          <p className="text-slate-600 text-center mb-6">
            Computer Science Student at Echelon Institute Of Technology 
          </p>

          {/* Location Badge */}
          <div className="flex items-center gap-1 text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm mb-6">
            <MapPin className="w-4 h-4" />
            <span>Haryana, India</span>
          </div>

          {/* Fun Metrics */}
          <div className="grid grid-cols-3 gap-3 w-full mb-6">
            {funMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className={`${metric.color} rounded-lg p-3 cursor-pointer`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setActiveMetric(index)}
                onMouseLeave={() => setActiveMetric(null)}
              >
                <div className="flex flex-col items-center text-center">
                  {metric.icon}
                  <span className="text-lg font-bold mt-1">{metric.value}</span>
                  <span className="text-xs">{metric.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Current Focus */}
          <div className="w-full bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-500" />
              Current Focus
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Mathematics and AI</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">ML and IOT</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Software Development</span>
              </div>
            </div>
          </div>

          {/* Availability Status */}
          <div className="w-full bg-green-50 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-700">Interested in Research</span>
            </div>
            <Calendar className="w-4 h-4 text-green-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;