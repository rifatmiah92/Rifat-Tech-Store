import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { Mail, Lock, Loader2 } from 'lucide-react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
      return;
    }
    
    setIsLoading(true);
    try {
      await register(email, password);
      toast.success("Account created successfully!");
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || "Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Successfully logged in with Google!");
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || "Failed to log in with Google");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-140px)] px-4">
      <div className="w-full max-w-md bg-[#11111a] p-8 rounded-3xl shadow-[0_0_40px_rgba(37,99,235,0.1)] border border-white/5 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none"></div>
        <div className="text-center mb-8 relative z-10">
          <h1 className="text-3xl font-extrabold text-white tracking-tighter">Initialize Account</h1>
          <p className="text-slate-400 mt-2">Join us and access premium systems</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div>
            <label className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-1">Email address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-500" />
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-500"
                placeholder="you@example.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-500" />
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-1">Confirm Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-500" />
              </div>
              <input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-10 w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full flex justify-center items-center py-3 px-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] text-sm uppercase tracking-widest font-bold text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050508] focus:ring-blue-600 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Initialize"}
          </button>
        </form>

        <div className="mt-6 relative z-10">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#11111a] text-slate-400">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex justify-center items-center py-3 px-4 border border-white/10 rounded-xl shadow-sm bg-white/5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
              Google
            </button>
          </div>
        </div>
        
        <p className="mt-8 text-center text-sm text-slate-400 relative z-10">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-blue-400 hover:text-blue-300 transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
