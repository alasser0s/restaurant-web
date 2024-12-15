"use client";
import { useState } from 'react';
import { menuItems } from '@/lib/data';
import { motion } from 'framer-motion';

export default function OrderPage() {
  const [cart, setCart] = useState<number[]>([1,2]); // Example cart items
  const [confirmed, setConfirmed] = useState(false);

  const uniqueItems = Array.from(new Set(cart));
  const cartDetails = uniqueItems.map(id => {
    const item = menuItems.find(m => m.id === id);
    const quantity = cart.filter(i => i === id).length;
    return { ...item!, quantity };
  });

  const total = cartDetails.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  const handleOrder = () => {
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <div className="max-w-6xl mx-auto py-16 px-4">
        <motion.div
          initial={{opacity:0, y:10}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5}}
          className="bg-green-700/10 border border-green-600 text-green-300 p-6 rounded max-w-md mx-auto text-center"
        >
          <h2 className="text-2xl font-serif text-gold mb-4">Order Confirmed!</h2>
          <p className="font-light">Your delicious food will be with you soon. Grazie!</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-serif text-gold mb-8">Your Order</h2>
      {cartDetails.length === 0 ? (
        <p className="text-gray-300 font-light">
          Your cart is empty. Please add items from our <a href="/menu" className="text-gold hover:opacity-90">menu</a>.
        </p>
      ) : (
        <div className="max-w-md mx-auto bg-gray-900/60 backdrop-blur-sm rounded p-6 border border-gray-800">
          <ul className="space-y-4 mb-6">
            {cartDetails.map(item => (
              <li key={item.id} className="flex justify-between items-center font-light">
                <span className="text-gray-200">
                  {item.name} <span className="text-gray-400">x {item.quantity}</span>
                </span>
                <span className="text-gray-200">${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-800">
            <span className="font-semibold text-gray-200">Total</span>
            <span className="font-semibold text-gray-200">${total}</span>
          </div>
          <button 
            onClick={handleOrder} 
            className="w-full bg-gold text-black py-2 px-4 rounded font-semibold hover:opacity-90 transition">
            Confirm Order
          </button>
        </div>
      )}
    </div>
  )
}
