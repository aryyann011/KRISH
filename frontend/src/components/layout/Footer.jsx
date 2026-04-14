import React from 'react';
import { Leaf, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <footer id="footer" className="bg-white border-t border-slate-200 pt-16 pb-8 relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Leaf className="w-6 h-6 text-[#1b3d2f]" />
                <span className="text-xl font-bold text-[#1b3d2f]">Krishi</span>
              </div>
              <p className="text-[#395c47] text-sm leading-relaxed mb-6">
                Revolutionizing Indian agriculture by transforming complex hyper-local data into simple, actionable decisions for farmers everywhere.
              </p>
              <div className="flex space-x-4">
                <motion.a whileHover={{ scale: 1.2, y: -2 }} href="#" className="w-10 h-10 rounded-full bg-[#f0f5ee] flex items-center justify-center text-[#1b3d2f] hover:bg-[#def0c6] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, y: -2 }} href="#" className="w-10 h-10 rounded-full bg-[#f0f5ee] flex items-center justify-center text-[#1b3d2f] hover:bg-[#def0c6] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, y: -2 }} href="#" className="w-10 h-10 rounded-full bg-[#f0f5ee] flex items-center justify-center text-[#1b3d2f] hover:bg-[#def0c6] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="text-[#1b3d2f] font-bold mb-6">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#how-it-works" onClick={() => scrollTo('how-it-works')} className="text-[#395c47] text-sm hover:text-[#1b3d2f] transition-colors">Smart Assistant</a></li>
                <li><a href="#features" onClick={() => scrollTo('features')} className="text-[#395c47] text-sm hover:text-[#1b3d2f] transition-colors">Crop Recommendation</a></li>
                <li><a href="#features" onClick={() => scrollTo('features')} className="text-[#395c47] text-sm hover:text-[#1b3d2f] transition-colors">Profit Estimation</a></li>
                <li><a href="#features" onClick={() => scrollTo('features')} className="text-[#395c47] text-sm hover:text-[#1b3d2f] transition-colors">Farm Health Guide</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#1b3d2f] font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#395c47] text-sm hover:text-[#1b3d2f] transition-colors">About Us</a></li>
                <li><a href="#" className="text-[#395c47] text-sm hover:text-[#1b3d2f] transition-colors">Careers</a></li>
                <li><a href="#" className="text-[#395c47] text-sm hover:text-[#1b3d2f] transition-colors">Blog</a></li>
                <li><a href="#footer" className="text-[#395c47] text-sm hover:text-[#1b3d2f] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#1b3d2f] font-bold mb-6">Get Updates</h4>
              <p className="text-[#395c47] text-sm mb-4">Subscribe to our newsletter for the latest farming tips and updates.</p>
              <div className="flex">
                <input type="email" placeholder="Email address" className="bg-[#f0f5ee] px-4 py-2 w-full outline-none text-sm text-[#1b3d2f] rounded-l-lg border-y border-l border-transparent focus:border-[#def0c6]" />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1b3d2f] text-white px-4 py-2 rounded-r-lg text-sm font-semibold hover:bg-[#142e23] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

          </div>
          
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#395c47] text-sm mb-4 md:mb-0">
              © 2026 Krishi App. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#395c47] text-sm hover:text-[#1b3d2f] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#395c47] text-sm hover:text-[#1b3d2f] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
  );
}
