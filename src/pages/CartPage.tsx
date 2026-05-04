import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-[#11111a] rounded-full flex items-center justify-center border border-white/10 mb-8">
          <ShoppingBag className="h-10 w-10 text-slate-500" />
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tighter mb-4">Your Cart is Empty</h1>
        <p className="text-slate-400 mb-8 max-w-md">Looks like you haven't added any premium gadgets to your cart yet.</p>
        <Link 
          to="/items" 
          className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold uppercase tracking-widest text-xs transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-white tracking-tighter mb-12">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {cart.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row bg-[#11111a] rounded-3xl p-6 border border-white/5 shadow-xl items-center sm:items-start gap-6">
              <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-transparent border border-white/5 shrink-0">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" />
              </div>
              
              <div className="flex-1 flex flex-col h-full w-full">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 line-clamp-1 group-hover:text-blue-400 transition-colors select-text">{item.title}</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{item.category}</p>
                  </div>
                  <span className="text-xl font-bold text-white tracking-tighter">${(item.price * item.quantity).toLocaleString()}</span>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4">
                  <div className="flex items-center bg-[#050508] border border-white/10 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-3 text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold text-white text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-3 text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-colors border border-transparent hover:border-red-400/20"
                    title="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-[#11111a] rounded-3xl p-8 border border-white/5 sticky top-28">
            <h2 className="text-xl font-bold text-white tracking-tight mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span className="text-white">${cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Shipping</span>
                <span className="text-emerald-400 uppercase tracking-widest text-[10px] font-bold">Free</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Tax</span>
                <span className="text-white">Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-6 mb-8">
              <div className="flex justify-between items-end">
                <span className="text-white font-bold">Total</span>
                <span className="text-3xl font-extrabold text-blue-400 tracking-tighter">${cartTotal.toLocaleString()}</span>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full flex items-center justify-center space-x-2 bg-white text-black px-8 py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
