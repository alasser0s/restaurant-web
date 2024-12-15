"use client";
import { motion } from 'framer-motion';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function MenuItemCard({item, onAddToCart}: {item: MenuItem, onAddToCart: (id:number)=>void}) {
  return (
    <motion.div 
      initial={{opacity:0, y:10}} 
      whileInView={{opacity:1, y:0}} 
      transition={{duration:0.3}}
      viewport={{ once: true }}
      className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-5 hover:shadow-lg hover:shadow-gold/20 transition relative flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-serif text-gold mb-2">{item.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{item.description}</p>
      </div>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
        <span className="text-gray-200 font-semibold text-lg">${item.price}</span>
        <button 
          onClick={() => onAddToCart(item.id)}
          className="bg-gold text-black px-4 py-2 rounded hover:opacity-90 transition text-sm font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  )
}
