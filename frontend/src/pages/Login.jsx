import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Leaf, ArrowRight, Loader2, Mail, Lock } from 'lucide-react';
import { supabase } from '../services/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // Fallback if supabase isn't connected properly yet just mock a slight delay
    if (supabase.supabaseUrl === 'https://placeholder.supabase.co') {
        setTimeout(() => {
            setLoading(false);
            alert("Please configure Supabase Keys in .env to login!");
        }, 1000);
        return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/dashboard'); // Will navigate to dashboard once built
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f0f5ee] font-sans">
      
      {/* Left Side - Visual Banner (Minimalist Farm Theme) */}
      <div className="hidden lg:flex w-1/2 bg-[#1b3d2f] relative overflow-hidden flex-col justify-between p-16">
        <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b3d2f] via-transparent to-transparent"></div>
        
        <div className="relative z-10">
          <Link to="/" className="flex items-center space-x-2 w-max">
            <Leaf className="w-8 h-8 text-[#def0c6]" />
            <span className="text-2xl font-bold text-[#def0c6]">Krishi</span>
          </Link>
        </div>

        <div className="relative z-10 max-w-md">
          <h2 className="text-4xl font-bold text-white leading-tight mb-6 tracking-tight">
            Cultivating <span className="text-[#def0c6]">Smarter</span> Harvests.
          </h2>
          <p className="text-white/80 text-lg leading-relaxed font-medium">
            Join thousands of modern farmers leveraging hyper-local data and advanced AI to maximize crop yield and profitability.
          </p>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 relative">
        <Link to="/" className="absolute top-8 left-8 lg:hidden flex items-center space-x-2">
            <Leaf className="w-6 h-6 text-[#1b3d2f]" />
            <span className="text-xl font-bold text-[#1b3d2f]">Krishi</span>
        </Link>

        <div className="w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-xl shadow-[#1b3d2f]/5 border border-slate-100">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-extrabold text-[#1b3d2f] mb-3 tracking-tight">Welcome Back</h1>
            <p className="text-[#395c47] font-medium">Log in to access your farm dashboard.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium text-center border border-red-100">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1b3d2f] ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#395c47]/50" />
                </div>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-[#f8faf7] border border-slate-200 rounded-2xl text-[#1b3d2f] font-medium focus:outline-none focus:ring-2 focus:ring-[#def0c6] focus:border-[#1b3d2f] transition-all"
                  placeholder="farmer@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                 <label className="text-sm font-bold text-[#1b3d2f]">Password</label>
                 <a href="#" className="text-xs font-semibold text-[#395c47] hover:text-[#1b3d2f] transition-colors">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#395c47]/50" />
                </div>
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-[#f8faf7] border border-slate-200 rounded-2xl text-[#1b3d2f] font-medium focus:outline-none focus:ring-2 focus:ring-[#def0c6] focus:border-[#1b3d2f] transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-[#1b3d2f] text-white rounded-2xl font-bold flex items-center justify-center hover:bg-[#142e23] transition-all shadow-lg shadow-[#1b3d2f]/20 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed mt-4 group"
            >
              {loading ? (
                 <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                 <>
                   Log In
                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                 </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[#395c47] font-medium text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#1b3d2f] font-bold hover:underline decoration-2 underline-offset-4">
                Sign up
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
