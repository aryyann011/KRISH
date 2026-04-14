import React from 'react';
import { Bot, Sprout, TrendingUp, BookOpen, ChevronRight, CloudRain, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-emerald-400" />,
      title: "Smart AI Assistant",
      description: "Ask questions like 'What should I do today?' and get simple, localized advice."
    },
    {
      icon: <Sprout className="w-8 h-8 text-teal-400" />,
      title: "Crop Recommendation",
      description: "Discover the perfect crop for your specific soil and current weather conditions."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Profit Estimation",
      description: "Calculate expected earnings based on crop costs and market trends easily."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-300" />,
      title: "Mini Guide",
      description: "Wikipedia-style learning section with tips on soil health and irrigation."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 border-none font-sans">
      {/* Background blobs for premium glassmorphism effect */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center bg-white/5 backdrop-blur-lg border-b border-white/10">
        <div className="flex items-center space-x-2">
          <Sprout className="w-8 h-8 text-emerald-400" />
          <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
            Krishi.ai
          </span>
        </div>
        <div>
          <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-all border border-white/20">
            Farmer Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-sm font-semibold mb-6 tracking-wide uppercase">
              Empowering Indian Farmers
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              We turn farm data into <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">simple decisions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              No complex charts. Just clear, actionable advice in your local language based on real-time weather, soil conditions, and advanced AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold transition-all flex items-center shadow-lg shadow-emerald-500/25">
                Open Smart App 
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 text-white rounded-full font-semibold transition-all flex items-center">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Weather/Soil Illustration Card (Mockup) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 mx-auto max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1 space-y-6">
              <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-4">Today's Field Context</h3>
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500/20 p-3.5 rounded-2xl border border-emerald-500/30 shadow-inner">
                  <CloudRain className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Live Weather</p>
                  <p className="text-white font-semibold text-lg">Light Rain Expected (2mm)</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-amber-500/20 p-3.5 rounded-2xl border border-amber-500/30 shadow-inner">
                  <Sun className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium mb-1">Soil Status</p>
                  <p className="text-white font-semibold text-lg">Slightly Dry (45% Moisture)</p>
                </div>
              </div>
            </div>
            
            {/* AI Recommendation Chat Mockup */}
            <div className="flex-1 w-full bg-slate-900/80 rounded-2xl p-6 border border-white/5 shadow-inner">
              <div className="flex items-center space-x-3 mb-5">
                <div className="bg-emerald-500 p-2 rounded-xl">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Krishi AI Advice</span>
              </div>
              <p className="text-slate-200 text-lg leading-relaxed font-light">
                "Since light rain is expected today, you <strong className="text-emerald-400 font-semibold">do not need to irrigate</strong> your field. Save your water and labor for tomorrow."
              </p>
              <div className="mt-6 flex space-x-3">
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white font-medium transition-colors">👍 Helpful</button>
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white font-medium transition-colors">Ask Follow-up</button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-32 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Everything you need to grow smart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                whileHover={{ y: -8 }}
                key={idx} 
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 group hover:border-emerald-500/50 hover:bg-white/10 transition-all cursor-pointer shadow-lg"
              >
                <div className="mb-6 bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
