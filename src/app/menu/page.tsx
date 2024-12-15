"use client";
import { useState } from 'react';
import { menuItems } from '@/lib/data';
import MenuItemCard from '../components/MenuItemCard';

export default function MenuPage() {
  const [cart, setCart] = useState<number[]>([]);

  const handleAddToCart = (id: number) => {
    setCart((prev) => [...prev, id]);
  }

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-serif text-gold mb-8">Our Menu</h2>
      <p className="text-gray-300 mb-8 max-w-2xl font-light">
        Each dish is a masterpiece crafted with passion, fresh ingredients, and authentic Italian flavors.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menuItems.map(item => (
          <MenuItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  )
}
