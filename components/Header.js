import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import { LogoSvg } from './LogoSvg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    { href: '/', label: 'Home' },
    {
      href: '/services',
      label: 'Services',
      children: [
        { href: '/services', label: 'Overview' },
        { href: '/services/website', label: '7-Day Website Launch' }
      ]
    },
    { href: '/blog', label: 'Blog' },
    { href: '/templates/y2k-theme', label: 'Templates' },
    { href: '/contact', label: 'Lets chat', isButton: true }
  ];

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
            {navigationItems.map((item) => {
              if (item.isButton) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-yellow/25 ${
                      isActive(item.href)
                        ? 'bg-yellow/90 text-purple'
                        : 'bg-yellow text-purple hover:bg-yellow/90'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.children) {
                return (
                  <div key={item.href} className="relative group z-50">
                    <Link
                      href={item.href}
                      className={`transition-all duration-300 font-body font-medium relative flex items-center gap-1 transform hover:scale-105 active:scale-95 ${
                        isActive(item.href)
                          ? 'text-yellow'
                          : 'text-white hover:text-yellow'
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="text-xs">▾</span>
                      <div
                        className={`absolute bottom-0 left-0 h-0.5 bg-yellow transition-all duration-300 ${
                          isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></div>
                    </Link>
                  <div className="absolute left-0 top-full hidden min-w-[220px] rounded-2xl border border-white/10 bg-purple/95 pt-4 shadow-2xl group-hover:block">
                      <div className="absolute -top-2 left-6 h-3 w-3 rotate-45 bg-purple/95 border-l border-t border-white/10"></div>
                      <div className="space-y-2 px-4 pb-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-xl px-4 py-2 font-body text-sm transition-colors ${
                              isActive(child.href)
                                ? 'bg-white text-purple'
                                : 'text-white/90 hover:bg-white/10'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-all duration-300 font-body font-medium relative group transform hover:scale-105 active:scale-95 ${
                    isActive(item.href)
                      ? 'text-yellow'
                      : 'text-white hover:text-yellow'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-yellow transition-all duration-300 ${
                      isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></div>
                </Link>
              );
            })}
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
              {navigationItems.map((item) => (
                <div key={item.href} className="space-y-2">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={item.isButton
                      ? `block px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 text-center mt-2 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-yellow/25 ${
                          isActive(item.href)
                            ? 'bg-yellow/90 text-purple'
                            : 'bg-yellow text-purple hover:bg-yellow/90'
                        }`
                      : `block transition-all duration-300 font-body font-medium py-2 transform hover:translate-x-2 active:scale-95 ${
                          isActive(item.href)
                            ? 'text-yellow'
                            : 'text-white hover:text-yellow'
                        }`
                    }
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenu}
                          className={`block text-sm font-body py-1 transition-all ${
                            isActive(child.href)
                              ? 'text-yellow'
                              : 'text-white/80 hover:text-white'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}