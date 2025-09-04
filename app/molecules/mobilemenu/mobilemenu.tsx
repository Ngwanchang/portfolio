
'use client';
import { useState } from 'react';
import NavLink from '../../atoms/Nav/nav';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/products', label: 'Products' },
    { href: '/pages', label: 'Pages' },
    { href: '/contact', label: 'Contact' }
  ];
  
  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-gray-700 hover:bg-orange-50 hover:text-orange-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg py-2">
          <div className="flex flex-col space-y-1 px-2">
            {links.map((link) => (
                          <NavLink 
                            key={link.href} 
                            href={link.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                          >
                            {link.label}
                          </NavLink>
                        ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;