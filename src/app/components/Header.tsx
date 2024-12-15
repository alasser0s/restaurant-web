"use client";

import Link from 'next/link'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function Header({ theme, onToggleTheme }: { theme: 'light' | 'dark'; onToggleTheme: () => void }) {
  return (
    <header className="fixed w-full z-50 backdrop-blur-sm bg-white/60 dark:bg-darkbg/60 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-gold font-serif text-2xl hover:opacity-90 transition">
          La Bella Vita
        </Link>
        <nav className="flex space-x-6">
          <Link href="/menu" className="hover:text-gold transition font-semibold text-gray-900 dark:text-gray-200">Menu</Link>
          <Link href="/booking" className="hover:text-gold transition font-semibold text-gray-900 dark:text-gray-200">Booking</Link>
          <Link href="/order" className="hover:text-gold transition font-semibold text-gray-900 dark:text-gray-200">Order</Link>
        </nav>
        <button onClick={onToggleTheme} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition">
          {theme === 'light' ? <MoonIcon className="h-5 w-5 text-gold" /> : <SunIcon className="h-5 w-5 text-gold" />}
        </button>
      </div>
    </header>
  );
}
