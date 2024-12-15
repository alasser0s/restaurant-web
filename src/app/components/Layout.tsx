import '../globals.css'
import { Inter } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    }
  }, [])

  const onToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <html lang="en" className={theme === 'dark' ? 'dark' : ''}>
      <body className={inter.className}>
        <Header theme={theme} onToggleTheme={onToggleTheme} />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
