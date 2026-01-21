'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from './Link';

interface MobileMenuProps {
  color?: string; // Icon color
}

const MobileMenu: React.FC<MobileMenuProps> = ({ color = "#081A57" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <button onClick={toggle} className="p-2 z-50 relative" style={{ color: isOpen ? '#081A57' : color }}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-32 px-10 h-screen animate-in fade-in slide-in-from-top-4 duration-300">
           <div className="flex flex-col gap-8 text-[#081A57]">
              <Link href="/" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>Home</Link>
              <Link href="/ecosystem" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>Ecosystem</Link>
              <Link href="/health-check" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>IT-Health Check</Link>
              <Link href="/about" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>Our Story</Link>
              <Link href="/pitch/capri-partners" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>Capri Deck</Link>
              <Link href="/pitch/capri-partners-styled" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>Capri Brand</Link>
              <Link href="/contact" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>Contact</Link>
           </div>
           
           <div className="mt-12 pt-12 border-t border-gray-100">
              <Link href="/contact" className="w-full bg-[#3A6EFF] text-white py-4 rounded text-center font-bold font-sans uppercase tracking-widest" onClick={toggle}>
                Join Pilot
              </Link>
           </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
