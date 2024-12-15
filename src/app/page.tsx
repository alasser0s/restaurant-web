"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Maria Rossi',
    text: '“An unforgettable culinary journey! The flavors transported me to the heart of Italy.”',
  },
  {
    name: 'Luca Bianchi',
    text: '“The atmosphere and service are impeccable. I felt like a VIP the entire evening.”',
  },
  {
    name: 'Giulia Romano',
    text: '“Each dish tasted like it was prepared with love and heritage. Simply divine.”',
  },
];

export default function HomePage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[testimonialIndex];

  return (
    <div>
      <Hero />

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.div 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true}} 
          transition={{duration:0.5}}
        >
          <h2 className="text-3xl font-serif text-gold mb-8">Our Philosophy</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl text-lg font-light">
            At <span className="font-semibold text-gray-100">La Bella Vita</span>, we believe that dining is an art form. 
            Every dish is crafted with a passion for flavor and authenticity. 
            We source the freshest local ingredients and combine them with time-honored Italian traditions 
            to bring you a culinary experience that is both innovative and deeply rooted in heritage.
          </p>
        </motion.div>
      </section>

      {/* Signature Dishes */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.div 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true}} 
          transition={{duration:0.5}}
        >
          <h2 className="text-3xl font-serif text-gold mb-8">Signature Dishes</h2>
          <p className="text-gray-300 max-w-2xl font-light mb-12">
            Experience a selection of our most beloved creations, each one a testament to our chefs’ dedication and skill.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dish 1 */}
            <div className="relative group overflow-hidden rounded-lg">
              <Image src="/dish1.jpg" alt="Signature Dish 1" width={400} height={300} className="w-full h-auto object-cover group-hover:scale-105 transition-transform"/>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4">
                <h3 className="text-xl font-serif text-gold text-center">Handmade Truffle Tagliatelle</h3>
              </div>
            </div>
            {/* Dish 2 */}
            <div className="relative group overflow-hidden rounded-lg">
              <Image src="/dish2.jpg" alt="Signature Dish 2" width={400} height={300} className="w-full h-auto object-cover group-hover:scale-105 transition-transform"/>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4">
                <h3 className="text-xl font-serif text-gold text-center">Burrata & Heirloom Tomato Salad</h3>
              </div>
            </div>
            {/* Dish 3 */}
            <div className="relative group overflow-hidden rounded-lg">
              <Image src="/dish3.jpg" alt="Signature Dish 3" width={400} height={300} className="w-full h-auto object-cover group-hover:scale-105 transition-transform"/>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4">
                <h3 className="text-xl font-serif text-gold text-center">Limoncello Panna Cotta</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Meet the Chef */}
      <section className="max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row md:items-center gap-12">
        <motion.div 
          initial={{opacity:0, x:-20}} 
          whileInView={{opacity:1, x:0}} 
          viewport={{once:true}} 
          transition={{duration:0.5}}
          className="md:w-1/2"
        >
          <Image src="/chef.jpg" alt="Head Chef" width={500} height={500} className="rounded-lg object-cover w-full h-auto shadow-lg" />
        </motion.div>
        <motion.div 
          initial={{opacity:0, x:20}} 
          whileInView={{opacity:1, x:0}} 
          viewport={{once:true}} 
          transition={{duration:0.5}}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-serif text-gold mb-4">Meet Chef Alessandro</h2>
          <p className="text-gray-300 font-light leading-relaxed mb-4">
            With over 20 years of culinary experience, Chef Alessandro has honed his craft in some of Italy’s most renowned kitchens. 
            His philosophy is simple: celebrate quality ingredients, respect tradition, and never stop innovating.
          </p>
          <p className="text-gray-300 font-light leading-relaxed">
            Under his guidance, La Bella Vita’s menu evolves with the seasons, ensuring that each visit brings a new and delightful surprise.
          </p>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.div 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true}} 
          transition={{duration:0.5}}
        >
          <h2 className="text-3xl font-serif text-gold mb-8">What Our Guests Say</h2>
          <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-lg p-6 md:p-10">
            <p className="text-gray-200 italic text-lg mb-6">"{currentTestimonial.text}"</p>
            <div className="text-gray-400 text-sm mb-4">— {currentTestimonial.name}</div>

            <div className="flex space-x-4">
              <button onClick={handlePrevTestimonial} className="px-3 py-2 rounded bg-gray-800 hover:bg-gray-700 transition text-sm">Prev</button>
              <button onClick={handleNextTestimonial} className="px-3 py-2 rounded bg-gray-800 hover:bg-gray-700 transition text-sm">Next</button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.div 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true}} 
          transition={{duration:0.5}}
        >
          <h2 className="text-3xl font-serif text-gold mb-8">Gallery</h2>
          <p className="text-gray-300 font-light mb-8 max-w-2xl">
            Explore our restaurant’s ambiance, from the intimate seating areas to the open kitchen and handpicked décor.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image src="/gallery1.jpg" alt="Gallery Image 1" width={300} height={200} className="object-cover w-full h-auto rounded hover:scale-105 transition-transform" />
            <Image src="/gallery2.jpg" alt="Gallery Image 2" width={300} height={200} className="object-cover w-full h-auto rounded hover:scale-105 transition-transform" />
            <Image src="/gallery3.jpg" alt="Gallery Image 3" width={300} height={200} className="object-cover w-full h-auto rounded hover:scale-105 transition-transform" />
            <Image src="/gallery4.jpg" alt="Gallery Image 4" width={300} height={200} className="object-cover w-full h-auto rounded hover:scale-105 transition-transform" />
          </div>
        </motion.div>
      </section>

      {/* Location & Hours */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.div 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true}} 
          transition={{duration:0.5}}
        >
          <h2 className="text-3xl font-serif text-gold mb-8">Location & Hours</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-300 font-light mb-4">Via Roma 123, Florence, Italy</p>
              <p className="text-gray-300 font-light mb-4">Monday - Friday: 12:00 PM - 10:00 PM</p>
              <p className="text-gray-300 font-light mb-4">Saturday - Sunday: 1:00 PM - 11:00 PM</p>
              <p className="text-gray-300 font-light">For reservations, call +39 055 1234567 or <a href="/booking" className="text-gold hover:opacity-90">book online</a>.</p>
            </div>
            <div className="relative w-full h-64 bg-gray-800 rounded overflow-hidden">
              {/* Replace this div with an actual map embed if available */}
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!..."
                style={{border:0}}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Newsletter Sign-Up */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <motion.div 
          initial={{opacity:0, y:20}} 
          whileInView={{opacity:1, y:0}} 
          viewport={{once:true}} 
          transition={{duration:0.5}}
          className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-serif text-gold mb-4">Join Our Newsletter</h2>
          <p className="text-black font-light mb-8 max-w-md mx-auto">
            Stay updated with our latest culinary creations, special events, and exclusive offers.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 border border-gray-700 bg-gray-800 rounded p-2 text-white focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="bg-gold text-black font-semibold py-2 px-4 rounded hover:opacity-90 transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
