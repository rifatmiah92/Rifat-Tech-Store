import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { CheckCircle, Loader2, CreditCard } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    address: '',
    city: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.address || !formData.city || !formData.cardNumber || !formData.expiry || !formData.cvv) {
      toast.error("Please fill in all payment and shipping details");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
      toast.success("Payment successful!");
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-140px)] px-4">
        <div className="w-full max-w-md bg-[#11111a] p-10 rounded-3xl shadow-[0_0_40px_rgba(37,99,235,0.1)] border border-white/5 text-center">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
            <CheckCircle className="h-10 w-10 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tighter mb-4">Payment Successful!</h1>
          <p className="text-slate-400 mb-8">Your order has been processed and is now being prepared for shipping.</p>
          <button 
            onClick={() => navigate('/')}
            className="w-full py-4 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-white tracking-tighter mb-10">Secure Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <form id="checkout-form" onSubmit={handlePayment} className="space-y-8">
            <div className="bg-[#11111a] p-8 rounded-3xl border border-white/5">
              <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-xs">Shipping Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">Full Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-600" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">Email</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-600" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">Address</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-600" placeholder="123 Tech Lane" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">City</label>
                  <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-600" placeholder="Silicon Valley" />
                </div>
              </div>
            </div>

            <div className="bg-[#11111a] p-8 rounded-3xl border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-5 w-5 text-blue-400" />
                <h2 className="text-lg font-bold text-white uppercase tracking-wider text-xs">Payment Method</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">Card Number (Simulated)</label>
                  <input required type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} className="w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-600" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">Expiry Date</label>
                    <input required type="text" name="expiry" value={formData.expiry} onChange={handleChange} className="w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-600" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">CVV</label>
                    <input required type="text" name="cvv" value={formData.cvv} onChange={handleChange} className="w-full p-3 border border-white/10 rounded-xl bg-[#050508] focus:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-white placeholder-slate-600" placeholder="123" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div>
          <div className="bg-[#11111a] rounded-3xl p-8 border border-white/5 sticky top-28">
            <h2 className="text-xl font-bold text-white tracking-tight mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6 divide-y divide-white/5 max-h-60 overflow-y-auto pr-2">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between py-3">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white line-clamp-1">{item.title}</span>
                    <span className="text-xs text-slate-500">Qty: {item.quantity}</span>
                  </div>
                  <span className="text-sm text-slate-300 font-bold">${(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-white/10 pt-6 mb-8 text-sm space-y-3">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span className="text-white">${cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Shipping</span>
                <span className="text-emerald-400">FREE</span>
              </div>
              <div className="flex justify-between items-end mt-4 pt-4 border-t border-white/5">
                <span className="text-white font-bold">Total</span>
                <span className="text-3xl font-extrabold text-blue-400 tracking-tighter">${cartTotal.toLocaleString()}</span>
              </div>
            </div>

            <button 
              type="submit"
              form="checkout-form"
              disabled={isProcessing}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              {isProcessing ? (
                <><Loader2 className="h-5 w-5 animate-spin" /><span>Processing</span></>
              ) : (
                <span>Confirm Payment</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
