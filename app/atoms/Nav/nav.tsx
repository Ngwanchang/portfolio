// src/components/atoms/NavLink/NavLink.jsx
import Link from 'next/link';

import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  isActive?: boolean;
   className?: string;
}

const NavLink = ({ href, children, isActive = false, className = '' }: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
        isActive 
          ? 'bg-orange-100 text-orange-700' 
          : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;