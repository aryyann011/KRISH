import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="relative z-10 max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Leaf className="w-8 h-8 text-[#1b3d2f]" />
          <span className="text-xl font-bold text-[#1b3d2f]">Krishi</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:flex items-center space-x-8 text-sm font-semibold text-[#1b3d2f]/80"
        >
          <button onClick={() => scrollTo('features')} className="hover:text-[#1b3d2f] hover:scale-105 transition-all">Product</button>
          <button onClick={() => scrollTo('how-it-works')} className="hover:text-[#1b3d2f] hover:scale-105 transition-all">Features</button>
          <button onClick={() => scrollTo('ai-assistant')} className="hover:text-[#1b3d2f] hover:scale-105 transition-all">Community</button>
          <button onClick={() => scrollTo('footer')} className="hover:text-[#1b3d2f] hover:scale-105 transition-all">Contact</button>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/signup">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-[#1b3d2f] text-white text-sm font-semibold rounded-full shadow-lg shadow-[#1b3d2f]/30 inline-block"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
    </nav>
  );
}
