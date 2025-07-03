'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-blue-600">FinJovem</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#educacao" className="text-gray-700 hover:text-blue-600">Educação</Link>
          <Link href="#glossario" className="text-gray-700 hover:text-blue-600">Glossário</Link>
          <Link href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            <Link href="#educacao" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Educação</Link>
            <Link href="#glossario" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Glossário</Link>
            <Link href="#faq" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>FAQ</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
