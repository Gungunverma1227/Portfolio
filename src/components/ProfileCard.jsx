import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import profileImage from '../assets/profile.jpeg';  // Add this import

const ProfileCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-48 h-48 relative cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <AnimatePresence initial={false} mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            className="absolute w-full h-full rounded-full overflow-hidden bg-blue-100"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${profileImage})` }}  // Updated this line
            />
          </motion.div>
        ) : (
          <motion.div
            key="back"
            className="absolute w-full h-full rounded-full overflow-hidden bg-blue-100 flex items-center justify-center"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <GraduationCap className="w-24 h-24 text-blue-500" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Click to flip */}
      </motion.div>
    </div>
  );
};

export default ProfileCard;