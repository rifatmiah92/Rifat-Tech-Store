import React, { useState } from 'react';
import { initialMockData } from '../lib/mockData';
import { Link } from 'react-router-dom';
import { Eye, Trash2, Edit } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ManageItemsPage() {
  const [items, setItems] = useState(initialMockData);

  const handleDelete = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    toast.success("Item deleted successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tighter">Manage Items</h1>
          <p className="text-slate-400 mt-2">View and manage your product inventory.</p>
        </div>
        <Link 
          to="/items/add" 
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]"
        >
          Add New Item
        </Link>
      </div>

      <div className="bg-[#11111a] rounded-3xl shadow-[0_0_40px_rgba(37,99,235,0.1)] border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/5 text-slate-400 font-bold text-[10px] tracking-widest uppercase">
                <th className="p-4 pl-6 w-1/2">Product</th>
                <th className="p-4 w-1/6">Category</th>
                <th className="p-4 w-1/6">Price</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {items.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500 font-medium">
                    No items found. Add some items to your inventory.
                  </td>
                </tr>
              ) : (
                items.map(item => (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-4 pl-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900/40 to-transparent overflow-hidden flex-shrink-0 border border-white/5">
                          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300" />
                        </div>
                        <div>
                          <p className="font-bold text-white line-clamp-1 group-hover:text-blue-400 transition-colors select-text">{item.title}</p>
                          <p className="text-xs text-slate-500 line-clamp-1">{item.shortDescription}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-400">
                      <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-widest">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-4 font-bold text-white tracking-tighter">
                      ${item.price.toLocaleString()}
                    </td>
                    <td className="p-4 pr-6 text-right">
                      <div className="flex justify-end space-x-2">
                        <Link 
                          to={`/items/${item.id}`} 
                          className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors border border-transparent hover:border-blue-400/20"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors border border-transparent hover:border-red-400/20"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
