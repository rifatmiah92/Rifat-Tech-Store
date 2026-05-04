import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Headphones, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border border-white/5 bg-gradient-to-br from-blue-900/20 to-transparent m-4 md:m-6 rounded-3xl pt-24 pb-32">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8 leading-[0.9]">
            ELEVATE YOUR <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              DIGITAL REALITY.
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover the curated collection of cutting-edge tech gadgets designed to redefine performance and style.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link 
              to="/items" 
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10 uppercase tracking-widest text-xs"
            >
              Shop Collection
            </Link>
            <Link 
              to="/items/2" 
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 uppercase tracking-widest text-xs transition-colors"
            >
              View Specs
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Why Choose Us</h2>
            <p className="mt-4 text-lg text-slate-400">We don't just sell gadgets. We deliver experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                <Zap className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Lightning Fast</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Experience next-level performance with our curated selection of high-speed devices and ultra-fast shipping.</p>
            </div>
            
            <div className="bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                <Shield className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Ironclad Security</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Every product is backed by strict quality control and our resilient 2-year comprehensive warranty policy.</p>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
                <Headphones className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Elite Support</h3>
              <p className="text-slate-400 leading-relaxed text-sm">Our deeply integrated technical experts are always on standby to help you maximize your hardware.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trending Items Banner */}
      <section className="py-20 mx-4 md:mx-6 rounded-3xl bg-[#11111a] border border-blue-500/30 overflow-hidden relative group">
        <div className="absolute top-8 right-8 bg-blue-500 text-white text-[10px] px-3 py-1 rounded font-bold uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(37,99,235,0.5)]">Hot Now</div>
        <div className="absolute w-1/2 h-full right-0 top-0 bg-blue-500/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
              <p className="text-sm text-blue-400 font-mono mb-4 tracking-widest">NEXT GEN DISPLAY</p>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tighter">AetherPhone X <br/>is Here.</h2>
              <p className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed">Experience the world's first true holographic display. Limited stock available for early adopters.</p>
              <Link 
                to="/items/2" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors uppercase tracking-widest text-xs"
              >
                Discover More
              </Link>
            </div>
            <div className="md:w-5/12 flex justify-center mt-10 md:mt-0">
              <div className="w-full aspect-square max-w-md bg-gradient-to-b from-blue-400/10 to-transparent rounded-[2rem] border border-white/5 flex items-center justify-center relative shadow-2xl">
                <div className="w-56 h-56 bg-slate-800 rounded-full flex items-center justify-center shadow-inner relative z-10 border border-white/10">
                   <div className="w-40 h-40 bg-slate-700/50 rounded-full border-4 border-slate-900 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] flex items-center justify-center">
                     <Zap className="h-12 w-12 text-blue-500 opacity-50" />
                   </div>
                   <div className="absolute w-4 h-24 bg-blue-500 bottom-8 right-8 blur-md opacity-40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">System Diagnostics</h2>
            <p className="mt-4 text-lg text-slate-400">Verified feedback from our user network.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white/5 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div className="flex text-yellow-400 mb-6 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-slate-300 italic mb-8 leading-relaxed">"The QuantumBook Pro completely changed my workflow. Rendering times are cut in half. Incredible machine, flawless execution."</p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">JD</div>
                <div>
                  <p className="font-bold text-white text-xs uppercase tracking-wider">John Doe</p>
                  <p className="text-[10px] text-slate-500 tracking-widest uppercase">Video Editor</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/5 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div className="flex text-yellow-400 mb-6 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-slate-300 italic mb-8 leading-relaxed">"I thought spatial audio was a gimmick until I tried the SonicSphere Max. It feels like I'm in the studio. Unmatched fidelity."</p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/20">SA</div>
                <div>
                  <p className="font-bold text-white text-xs uppercase tracking-wider">Sarah Adams</p>
                  <p className="text-[10px] text-slate-500 tracking-widest uppercase">Music Producer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/5 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div className="flex text-yellow-400 mb-6 gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-slate-300 italic mb-8 leading-relaxed">"Fast shipping, excellent packaging, and the support team was instantly available when I had a question verifying my components."</p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold border border-purple-500/20">MR</div>
                <div>
                  <p className="font-bold text-white text-xs uppercase tracking-wider">Michael Rogers</p>
                  <p className="text-[10px] text-slate-500 tracking-widest uppercase">Tech Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Newsletter Section */}
      <section className="py-24 mb-10 mx-4 md:mx-6 rounded-3xl bg-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tighter uppercase">Get The Latest Tech Drops</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto">Subscribe to our secure network for exclusive deals, early access to new product drops, and deep tech insights.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="System Email Address" 
              required
              className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder:text-white/40 transition-shadow"
            />
            <button 
              type="submit" 
              className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-slate-900 transition-colors uppercase tracking-widest text-xs shadow-xl"
            >
              Initialize Loop
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
