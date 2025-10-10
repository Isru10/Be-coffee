// components/layout/Header.tsx (Client Component)
'use client';
import { useState } from 'react';
import Link from 'next/link';
// Assuming 'lucide-react' is installed for icons (Menu/X)
import { Menu, X } from 'lucide-react';
import { MotionDiv } from '../motion/MotionProvider';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Coffee', href: '/coffee' },
  { name: 'Contact Us', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-primary/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          
          {/* Logo / Brand Name */}
          <MotionDiv 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-start lg:w-0 lg:flex-1"
          >
            <Link href="/" className="text-2xl font-serif font-bold text-accent-gold hover:text-text-dark transition-colors">
              Beyene Geba
            </Link>
          </MotionDiv>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item, index) => (
              <MotionDiv
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className="text-text-dark hover:text-accent-gold font-sans font-medium transition-colors text-lg"
                >
                  {item.name}
                </Link>
              </MotionDiv>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-bg-primary rounded-md p-2 inline-flex items-center justify-center text-text-dark hover:text-accent-gold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-gold"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {/* Used conditional rendering instead of 'exit' animation for simplicity */}
      {isOpen && (
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 w-full bg-bg-primary shadow-lg p-2"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-text-dark hover:bg-bg-primary/80 hover:text-accent-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <hr className='border-accent-gold/30 my-2'/>
            <Link
                href='/contact'
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2 rounded-md font-bold text-bg-primary bg-accent-gold hover:bg-text-dark transition-colors"
            >
                Get in Touch
            </Link>
          </div>
        </MotionDiv>
      )}
    </header>
  );
}