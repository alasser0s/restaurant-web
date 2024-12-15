"use client";

import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-black dark:bg-darkbg dark:text-gray-200 selection:bg-gold selection:text-white">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main className="pt-20 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
