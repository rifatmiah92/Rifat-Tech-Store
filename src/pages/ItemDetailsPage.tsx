import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { initialMockData, TechGadget } from '../lib/mockData';
import { ArrowLeft, Star, ShoppingCart, Info, RotateCcw, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ItemDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<TechGadget | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // In a real app, this would be an API call
    const foundItem = initialMockData.find(i => i.id === id);
    if (foundItem) {
      setItem(foundItem);
    } else {
      // Redirect if not found
      navigate('/items', { replace: true });
    }
  }, [id, navigate]);

  if (!item) return null; // Or a loading spinner

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        to="/items" 
        className="inline-flex items-center text-slate-400 hover:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Collection
      </Link>

      <div className="bg-[#11111a] rounded-3xl shadow-[0_0_40px_rgba(37,99,235,0.1)] border border-white/5 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Image Side */}
          <div className="relative bg-gradient-to-br from-blue-900/10 to-transparent flex items-center justify-center p-8 lg:p-0 border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-lg">
                {item.category}
              </span>
            </div>
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover lg:absolute inset-0 aspect-[4/3] lg:aspect-auto hover:brightness-110 transition-all duration-700"
            />
          </div>
          
          {/* Content Side */}
          <div className="p-8 lg:p-12 xl:p-16 flex flex-col bg-[#0a0a0f]">
            <div className="mb-4 flex items-center space-x-4">
              <div className="flex items-center text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <span className="ml-1.5 font-bold text-white">{item.rating}</span>
                <span className="ml-1 text-xs text-slate-500 uppercase tracking-widest">(128 VERIFIED)</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter mb-4 select-text">
              {item.title}
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 font-medium leading-relaxed select-text">
              {item.shortDescription}
            </p>

            <div className="mb-10">
              <span className="text-5xl font-extrabold text-white tracking-tighter">${item.price.toLocaleString()}</span>
              <span className="ml-2 text-lg text-slate-600 font-medium line-through">${(item.price * 1.2).toLocaleString()}</span>
            </div>

            <div className="text-slate-300 mb-10 max-w-none select-text">
              <p className="leading-relaxed text-lg">{item.fullDescription}</p>
            </div>

            {/* Specifications / Features simple grid */}
            <div className="grid grid-cols-2 gap-4 mb-10 border-t border-b border-white/5 py-8">
              <div className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-emerald-400 mr-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-white tracking-tight">System Warranty</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Full coverage.</p>
                </div>
              </div>
              <div className="flex items-start">
                <RotateCcw className="h-6 w-6 text-blue-400 mr-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-white tracking-tight">Quantum Returns</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">30-day window.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Info className="h-6 w-6 text-purple-400 mr-3 shrink-0" />
                <div>
                  <h4 className="font-bold text-white tracking-tight">Status</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider text-emerald-500">Optimal (In Stock)</p>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <button 
                onClick={() => addToCart(item)}
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 rounded-2xl text-sm uppercase tracking-widest font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Initialize Purchase</span>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
