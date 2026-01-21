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
              <Link href="/capri-onboarding-journey" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>Onboarding Journey</Link>
              <Link href="/capri-onboarding-journey/fase-0" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>Fase 0</Link>
              <Link href="/capri-onboarding-journey/fase-1" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>Fase 1</Link>
              <Link href="/capri-onboarding-journey/fase-2" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>Fase 2</Link>
              <Link href="/capri-onboarding-journey/fase-3" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>Fase 3</Link>
              <Link href="/capri-onboarding-journey/fase-4" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>Fase 4</Link>
              <Link href="/capri-onboarding-journey/fase-5" className="text-2xl font-black font-sans uppercase tracking-tight" onClick={toggle}>Fase 5</Link>
           </div>
           
           <div className="mt-12 pt-12 border-t border-gray-100">
              <Link href="/capri-onboarding-journey" className="w-full bg-[#3A6EFF] text-white py-4 rounded text-center font-bold font-sans uppercase tracking-widest" onClick={toggle}>
                Naar de journey
              </Link>
           </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
