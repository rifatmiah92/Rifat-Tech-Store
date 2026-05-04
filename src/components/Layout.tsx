import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Zap, LogOut, PackagePlus, Settings, ShoppingBag, User, ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Layout() {
  const { user, logout } = useAuth();
  const { cartItemsCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Successfully logged out!");
      navigate('/login');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] text-slate-200 flex flex-col font-sans overflow-x-hidden">
      <header className="h-20 border-b border-white/5 bg-[#050508]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between h-full items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-500 border border-blue-400/30"></div>
                <div className="absolute inset-0 bg-emerald-500/20 rounded-xl -rotate-45 group-hover:-rotate-90 transition-transform duration-500 border border-emerald-400/30"></div>
                <Zap className="h-5 w-5 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase ml-1">
                RIFAT<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 ml-1">MIAH</span>
              </span>
            </Link>

            <nav className="flex items-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <Link to="/items" className="relative group hover:text-white transition-colors py-2">
                <span>Shop</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></span>
              </Link>
              
              <Link to="/cart" className="relative group hover:text-white transition-colors py-2 flex items-center">
                <ShoppingCart className="h-4 w-4 mr-1.5 group-hover:text-blue-400 transition-colors" />
                <span>Cart</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></span>
                {cartItemsCount > 0 && (
                  <span className="absolute top-0 -right-4 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-[0_0_10px_rgba(37,99,235,0.8)] border border-blue-400/30">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="relative group">
                    <button className="flex items-center space-x-1.5 hover:text-white transition-colors py-2">
                      <User className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                      <span className="hidden sm:inline">Account</span>
                    </button>
                    <div className="absolute right-0 mt-2 w-56 bg-[#11111a]/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50 overflow-hidden">
                      <div className="px-4 py-3 border-b border-white/5 bg-white/5">
                        <p className="text-white text-xs truncate">{user.email}</p>
                      </div>
                      <div className="p-2 flex flex-col gap-1">
                        <Link to="/items/manage" className="px-3 py-2.5 text-xs text-slate-300 hover:bg-white/10 rounded-xl flex items-center transition-colors">
                          <Settings className="h-4 w-4 mr-3 text-blue-400" />
                          Manage Items
                        </Link>
                        <Link to="/items/add" className="px-3 py-2.5 text-xs text-slate-300 hover:bg-white/10 rounded-xl flex items-center transition-colors">
                          <PackagePlus className="h-4 w-4 mr-3 text-emerald-400" />
                          Add New Item
                        </Link>
                        <div className="h-px w-full bg-white/5 my-1"></div>
                        <button onClick={handleLogout} className="w-full text-left px-3 py-2.5 text-xs text-red-400 hover:bg-red-400/10 rounded-xl flex items-center transition-colors">
                           <LogOut className="h-4 w-4 mr-3" />
                           Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4 ml-2">
                  <Link to="/login" className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-xs font-bold tracking-widest uppercase">
                    Log in
                  </Link>
                  <Link to="/register" className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all uppercase text-xs hidden sm:block">
                    Sign up
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full relative">
        <Outlet />
      </main>

      <footer className="h-12 bg-black flex items-center justify-between px-10 text-[10px] text-slate-600 uppercase tracking-widest border-t border-white/5 mt-auto z-10 w-full">
        <div>&copy; {new Date().getFullYear()} Remontada Tech Store. All rights reserved.</div>
        <div className="hidden sm:flex gap-6">
          <span className="hover:text-blue-400 cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</span>
          <span>System Status: <span className="text-emerald-500">Optimal</span></span>
        </div>
      </footer>
    </div>
  );
}
