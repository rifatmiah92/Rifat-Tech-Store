import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { initialMockData } from '../lib/mockData';

export default function ItemsPage() {
  const [items] = useState(initialMockData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [items, searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-white tracking-tighter mb-4">Our Collection</h1>
        <p className="text-xl text-slate-400">Discover our hand-picked selection of premium gadgets.</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-6 mb-10 justify-between items-start md:items-center bg-white/5 p-6 rounded-3xl border border-white/5">
        
        {/* Search */}
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-500" />
          </div>
          <input
            type="text"
            placeholder="Search by title..."
            className="pl-11 w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center space-x-3 w-full md:w-auto overflow-x-auto hide-scrollbar">
          <Filter className="h-5 w-5 text-slate-500 hidden md:block" />
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-colors ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredItems.length === 0 ? (
         <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5 shadow-2xl">
           <h3 className="text-xl font-bold text-white mb-2 tracking-tight">No items found</h3>
           <p className="text-slate-400 font-medium">Try adjusting your search or category filter.</p>
           <button 
             onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
             className="mt-6 text-blue-400 font-bold hover:text-blue-300 uppercase tracking-widest text-xs transition-colors"
           >
             Clear filters
           </button>
         </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="group flex flex-col bg-[#11111a] rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] relative">
              <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-blue-400/10 to-transparent flex items-center justify-center p-6 transition-all duration-500">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500 rounded-2xl shadow-xl"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(37,99,235,0.5)]">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 tracking-tight group-hover:text-blue-400 transition-colors select-text">{item.title}</h3>
                <p className="text-xs text-slate-400 mb-4 line-clamp-2 flex-1 leading-relaxed">{item.shortDescription}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-2xl font-bold text-white tracking-tighter">${item.price.toLocaleString()}</span>
                  <Link 
                    to={`/items/${item.id}`}
                    className="p-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-blue-600 hover:border-blue-500 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050508] focus:ring-blue-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
