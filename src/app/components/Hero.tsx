"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div 
        initial={{opacity:0, y:20}} 
        animate={{opacity:1, y:0}} 
        transition={{duration: 0.5}}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-5xl font-serif text-gold mb-4">La Bella Vita</h1>
        <p className="text-xl mb-8">Authentic Italian Cuisine in the Heart of the City</p>
        <div className="space-x-4">
          <Link 
            href="/menu" 
            className="px-6 py-3 bg-gold text-black hover:bg-opacity-90 transition rounded-lg inline-block"
          >
            View Menu
          </Link>
          <Link 
            href="/booking" 
            className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-lg inline-block"
          >
            Book a Table
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
