"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BookingForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(2);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <motion.div
        initial={{opacity:0, scale:0.95}}
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}
        className="bg-green-700/10 border border-green-600 text-green-300 p-4 rounded mt-8"
      >
        <h2 className="text-xl font-semibold mb-2">Booking Confirmed!</h2>
        <p className="font-light">We look forward to welcoming you, {name}.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      <div>
        <label className="block mb-1 text-gray-300 font-semibold">Name</label>
        <input 
          type="text" 
          className="w-full border border-gray-700 bg-gray-800 rounded p-2 text-white"
          value={name} 
          onChange={e=>setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-300 font-semibold">Date & Time</label>
        <input 
          type="datetime-local" 
          className="w-full border border-gray-700 bg-gray-800 rounded p-2 text-white"
          value={date}
          onChange={e=>setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 text-gray-300 font-semibold">Number of People</label>
        <input 
          type="number"
          min="1" 
          className="w-full border border-gray-700 bg-gray-800 rounded p-2 text-white"
          value={people}
          onChange={e=>setPeople(Number(e.target.value))}
          required
        />
      </div>
      <button type="submit" className="bg-gold text-black font-semibold py-2 px-4 rounded hover:opacity-90 transition">
        Reserve
      </button>
    </form>
  );
}
