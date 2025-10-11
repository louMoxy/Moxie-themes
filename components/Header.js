import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import { LogoSvg } from './LogoSvg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <header className="bg-purple border-b-4 border-yellow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-32 h-20">
              <LogoSvg />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-all duration-300 font-body font-medium relative group transform hover:scale-105 active:scale-95 ${
                isActive('/') 
                  ? 'text-yellow' 
                  : 'text-white hover:text-yellow'
              }`}
            >
              <span className="relative z-10">Home</span>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-yellow transition-all duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>
            <Link 
              href="/templates/y2k-theme" 
              className={`transition-all duration-300 font-body font-medium relative group transform hover:scale-105 active:scale-95 ${
                isActive('/templates/y2k-theme') 
                  ? 'text-yellow' 
                  : 'text-white hover:text-yellow'
              }`}
            >
              <span className="relative z-10">Templates</span>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-yellow transition-all duration-300 ${
                isActive('/templates/y2k-theme') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-yellow/25 ${
                isActive('/contact')
                  ? 'bg-yellow/90 text-purple'
                  : 'bg-yellow text-purple hover:bg-yellow/90'
              }`}
            >
              Lets chat
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110 active:scale-95"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-yellow/30 bg-purple">
            <nav className="py-4 space-y-4">
              <Link 
                href="/" 
                onClick={closeMenu}
                className={`block transition-all duration-300 font-body font-medium py-2 transform hover:translate-x-2 active:scale-95 ${
                  isActive('/') 
                    ? 'text-yellow' 
                    : 'text-white hover:text-yellow'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/templates/y2k-theme" 
                onClick={closeMenu}
                className={`block transition-all duration-300 font-body font-medium py-2 transform hover:translate-x-2 active:scale-95 ${
                  isActive('/templates/y2k-theme') 
                    ? 'text-yellow' 
                    : 'text-white hover:text-yellow'
                }`}
              >
                Templates
              </Link>
              <Link 
                href="/contact" 
                onClick={closeMenu}
                className={`block px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 text-center mt-4 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-yellow/25 ${
                  isActive('/contact')
                    ? 'bg-yellow/90 text-purple'
                    : 'bg-yellow text-purple hover:bg-yellow/90'
                }`}
              >
                Lets chat
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}