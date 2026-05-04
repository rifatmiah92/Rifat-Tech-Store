import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function AddItemPage() {
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    price: '',
    category: 'Mobile',
    imageUrl: ''
  });

  const categories = ['Mobile', 'Laptop', 'Tablet', 'Watch', 'Desktop', 'Camera', 'Audio', 'TV & Video', 'Accessories', 'Network', 'Storage'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.shortDescription || !formData.price || !formData.imageUrl || !formData.fullDescription) {
      toast.error('Please fill out all fields.');
      return;
    }
    
    // Simulate adding to mock data / database
    console.log("Submitted Item Data:", {
      ...formData,
      price: parseFloat(formData.price),
      id: Math.random().toString(36).substr(2, 9),
      rating: 0 // default
    });
    
    toast.success('Item added successfully!');
    setFormData({
      title: '',
      shortDescription: '',
      fullDescription: '',
      price: '',
      category: 'Laptop',
      imageUrl: ''
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white tracking-tighter">Add New Item</h1>
        <p className="text-slate-400 mt-2">Initialize a new product listing in your database.</p>
      </div>

      <div className="bg-[#11111a] rounded-3xl shadow-[0_0_40px_rgba(37,99,235,0.1)] border border-white/5 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-600"
                placeholder="e.g. QuantumBook Pro 15"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-1">Short Description</label>
              <input
                type="text"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                className="w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-600"
                placeholder="Brief summary of the product"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-1">Full Description</label>
              <textarea
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-600"
                placeholder="Detailed information about features, specs, etc."
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-1">Price ($)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-600"
                placeholder="99.99"
              />
            </div>

            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white appearance-none"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-bold tracking-wider uppercase text-slate-300 mb-1">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-600"
                placeholder="https://images.unsplash.com/..."
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] text-xs uppercase tracking-widest font-bold text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#050508] focus:ring-blue-600 transition-all active:scale-[0.98]"
            >
              Initialize Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
